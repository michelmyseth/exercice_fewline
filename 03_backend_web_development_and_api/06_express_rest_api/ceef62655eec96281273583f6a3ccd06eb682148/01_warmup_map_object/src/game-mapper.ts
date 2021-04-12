export function gameMapper(games: GameWithALotOfData[]): Game[] {
  const array = games.map((result) => {
    return {
      name: result.name,
      slug: result.slug,
      cover: result.cover.url,
    };
  });
  return array;
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
};

export type GameWithALotOfData = {
  name: string;
  slug: string;
  code: number;
  cover: {
    thumbnail: string;
    url: string;
  };
};
