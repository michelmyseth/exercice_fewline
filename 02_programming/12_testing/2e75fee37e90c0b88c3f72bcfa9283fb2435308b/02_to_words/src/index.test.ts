import { toWords } from "./index";

test("toWords should return Word with space beetween", () => {
  const result = toWords("two words");
  expect(result).toMatchObject(["two", "words"]);
});

test("toWords should return Word with space beetween", () => {
  const result2 = toWords("High-tech product");
  expect(result2).toMatchObject(["High", "tech", "product"]);
});
