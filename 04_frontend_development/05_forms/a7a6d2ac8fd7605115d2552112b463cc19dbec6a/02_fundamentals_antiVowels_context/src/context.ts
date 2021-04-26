import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (str: string): string => {
  // Code your function for context here
  const test = sentenceSplitter(str).filter((word) => {
    if (
      word[0] != "I" &&
      word[0] != "e" &&
      word[0] != "a" &&
      word[0] != "o" &&
      word[0] != "u" &&
      word[0] != "y" &&
      word[0] != "i"
    )
      return word;
  });
  return sentenceJoiner(test);
};
