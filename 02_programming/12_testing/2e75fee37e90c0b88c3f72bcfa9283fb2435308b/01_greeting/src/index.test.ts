import { greet } from "./index";

test("Greed name should return Hello name!", () => {
  const result = greet("louis");
  expect(result).toBe("Hello LOUIS!");
});

test("Greed name should return Hello World with empty parameter", () => {
  const empty = greet();
  expect(empty).toBe("Hello WORLD!");
});
