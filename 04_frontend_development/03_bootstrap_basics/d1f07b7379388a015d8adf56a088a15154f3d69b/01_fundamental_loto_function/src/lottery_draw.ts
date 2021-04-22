type Draw = [number, number, number, number, number, number];

export function lottery_draw(): Draw {
  const array: Draw = [12, 23, 32, 21, 32, 21];
  for (let i = 0; i < 6; i++) {
    array[i] = Math.floor(Math.random() * 101);
  }
  return array;
}
