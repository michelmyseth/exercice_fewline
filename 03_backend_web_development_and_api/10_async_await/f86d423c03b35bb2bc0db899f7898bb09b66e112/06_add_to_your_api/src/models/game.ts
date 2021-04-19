import { Collection } from "mongodb";

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
  private collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  private fullGameToGame(game: Game) {
    return {
      name: game.name,
      slug: game.slug,
      cover: game.cover_url,
    };
  }

  async getAll(): Promise<Game[]> {
    const response = await this.collection.find({}).toArray();
    const answer = response.map(this.fullGameToGame);
    return answer;
  }

  async findBySlug(slug: string): Promise<Game | null> {
    const response = await this.collection.findOne({
      slug: slug,
    });
    if (!response.slug) throw Error;
    else return response;
  }

  async findByPlatform(platform_slug: string): Promise<Game[]> {
    const response = await this.collection.find({ "platform.slug": platform_slug }).toArray();
    const result = await response.map(this.fullGameToGame);
    return result;
  }

  async getPlatforms(): Promise<Platform[]> {
    const response = await this.collection.find({}).toArray();

    const platforms: Platform[] = [];

    await response.forEach((game) => {
      const platform = platforms.find((platform) => platform.slug === game.platform.slug);
      if (!platform) {
        platforms.push(game.platform);
      }
    });

    const result = platforms.map((platform) => ({
      name: platform.name,
      slug: platform.slug,
    }));
    return result;
  }

  async putGame(game: Game): Promise<unknown> {
    const response = await this.collection.insertOne(game);
    if (!response) throw Error;
    else return response;
  }
}
