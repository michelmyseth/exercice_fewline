export function line(numberOfStars: number): string {
  let stars = "";
  for (let i = 0; i < numberOfStars; i++) stars += "*";
  return stars;
}
