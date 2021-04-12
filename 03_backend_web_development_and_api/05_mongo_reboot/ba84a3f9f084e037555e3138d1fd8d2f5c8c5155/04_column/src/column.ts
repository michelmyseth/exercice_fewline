export function column(numberOfLines: number, lineContent: string): string {
  let str = "";
  for (let i = 0; i < numberOfLines; i++) {
    str += lineContent + "\n";
  }
  return str;
}
