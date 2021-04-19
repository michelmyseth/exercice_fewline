import { squareNumber } from "./squareNumber";

export function context(arrayOfNumbers: number[]): number[] {
  return arrayOfNumbers.map((element) => squareNumber(element));
  // Code the function here
}
