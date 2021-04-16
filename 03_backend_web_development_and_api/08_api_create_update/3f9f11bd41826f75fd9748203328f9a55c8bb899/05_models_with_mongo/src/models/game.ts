//import { response } from "express";
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
  collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  getAll(): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((games) => {
        return games.map((reponse) => {
          return {
            name: reponse.name,
            slug: reponse.slug,
            cover: reponse.cover_url,
          };
        });
      });
  }

  findBySlug(slug: string): Promise<Game | null> {
    return this.collection
      .find()
      .toArray()
      .then((games) => {
        const result = games.find((reponse) => {
          if (reponse.slug === slug) return reponse;
        });
        if (result) return result;
        else return null;
      });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((games) => {
        const result = games.filter((platform) => {
          if (platform_slug === platform.platform.slug) return platform;
          else return false;
        });
        return result;
      });
  }

  getPlatforms(): Promise<Platform[]> {
    return this.collection
      .find()
      .toArray()
      .then((games) => {
        const ArrayResult: Platform[] = [];
        games.forEach((game) => {
          if (
            ArrayResult.find((platform) => {
              return game.platform.slug === platform.slug;
            }) === undefined
          ) {
            ArrayResult.push({ name: game.platform.name, slug: game.platform.slug });
          }
        });
        return ArrayResult;
      });
  }
}
