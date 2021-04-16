export function mumble(str: string): string {
  const letters = str.toLowerCase().split("");
  const result = [];
  letters.forEach((letter, i) => result.push(letter.repeat(i + 1)));
  return result.join("-");
}
