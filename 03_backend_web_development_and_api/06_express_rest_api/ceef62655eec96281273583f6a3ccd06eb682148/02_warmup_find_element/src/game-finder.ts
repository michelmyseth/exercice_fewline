export function findGameFromSlug(games: Game[], slug: string): Game {
  return games.find((response) => (response.slug === slug ? "exist" : undefined));
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
  platform: string;
};
