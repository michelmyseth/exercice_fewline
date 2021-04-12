import { Game } from "./types";

export function filterGameByPlatform(games: Game[], platform: string): Game[] {
  //Create a function that takes an array of games as input
  //and a platform name that returns only the games that correspond to this platform.
  return games.filter((word) => word.platform === platform);
}
