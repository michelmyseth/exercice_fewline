import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  return sentence
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}
