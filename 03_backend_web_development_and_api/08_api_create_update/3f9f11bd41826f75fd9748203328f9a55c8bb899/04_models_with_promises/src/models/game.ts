export type Game = {
  name: string;
  slug: string;
  [key: string]: any;
};

export type Platform = {
  name: string;
  slug: string;
  [key: string]: any;
};

export class GameModel {
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  getAll(): Promise<Game[]> {
    return new Promise((resolve) => {
      const result = this.collection.map((reponse) => {
        return {
          name: reponse.name,
          slug: reponse.slug,
          cover: reponse.cover_url,
        };
      });
      resolve(result);
    });
  }

  findBySlug(slug: string): Promise<Game | null> {
    return new Promise((resolve) => {
      const result = this.collection.find((game) => {
        if (game.slug === slug) return game;
      });
      if (result) resolve(result);
      else resolve(null);
    });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return new Promise((resolve) => {
      const result = this.collection.filter((platform) => {
        if (platform_slug === platform.platform.slug) return platform;
        else return false;
      });
      resolve(result);
    });
  }

  getPlatforms(): Promise<Platform[]> {
    return new Promise((resolve) => {
      const ArrayResult: Platform[] = [];
      this.collection.forEach((game) => {
        if (
          ArrayResult.find((platform) => {
            return game.platform.slug === platform.slug;
          }) === undefined
        ) {
          ArrayResult.push({ name: game.platform.name, slug: game.platform.slug });
        }
      });
      resolve(ArrayResult);
    });
  }
}
