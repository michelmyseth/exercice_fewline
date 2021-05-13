import { openBrowser, closeBrowser, goto, text, click, button, waitFor } from "taiko";
import "regenerator-runtime/runtime";

beforeAll(async () => {
  await openBrowser({ args: ["--window-size=1440,1000"], headless: false });

  await goto("http://localhost:8080");
});
afterAll(async () => {
  await closeBrowser();
});

test("Checking STR : This is my text", async () => {
  expect.assertions(1);
  await text(/This is my text/).exists();
  expect(await text(/This is my text/).exists()).toBe(true);
});

test("click on the Hide content button", async () => {
  expect.assertions(1);
  await click(button(/Hide content/));
  expect(await button(/Reveal content/).exists()).toBe(true);
});
test("check that the paragraph is no longer there", async () => {
  expect.assertions(1);
  await waitFor("");
  expect(await text("").exists()).toBe(true);
});

test("click again on the button", async () => {
  expect.assertions(1);
  await click(button(/Reveal content/));
  expect(await button(/Hide content/).exists()).toBe(true);
});

test("check that the paragraph is there again", async () => {
  expect.assertions(1);
  await text(/This is my text/).exists();
  expect(await text(/This is my text/).exists()).toBe(true);
});
