import { lottery_draw } from "./lottery_draw";

type Draw = number[];

export function contextFunction(ticket: Draw): void {
  const check: Draw = lottery_draw();
  if (JSON.stringify(ticket) === JSON.stringify(check)) console.log("You won");
  else console.log("You lost...");
  // Code the function here
}
