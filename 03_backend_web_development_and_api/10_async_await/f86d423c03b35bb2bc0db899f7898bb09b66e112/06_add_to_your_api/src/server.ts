import express from "express";
import * as core from "express-serve-static-core";
import { GameModel } from "./models/game";
import bodyparser from "body-parser";

const jsonParser = bodyparser.json();
export function makeApp(gameModel: GameModel): core.Express {
  const app = express();

  app.get("/", async (request, response) => {
    const answer = await response.status(400).json({ error: "Wrong resource" });
    return answer;
  });

  app.get("/games", async (request, response) => {
    const answer = await gameModel.getAll().then((games) => {
      response.json(games);
    });
    return answer;
  });

  app.post("/games", jsonParser, async (request, response) => {
    const input = request.body;
    if (input.name === undefined || input.slug === undefined) response.status(400).end();
    else {
      const answer = await gameModel.putGame(input).then(() => {
        response.status(201).json(input);
      });
      return answer;
    }
  });

  app.get("/games/:game_slug", async (request, response) => {
    try {
      const answer = await gameModel.findBySlug(request.params.game_slug).then((game) => {
        response.json(game);
      });
      return answer;
    } catch (error) {
      response.status(404).end();
    }
  });

  app.get("/platforms", async (request, response) => {
    const answer = await gameModel.getPlatforms().then((platforms) => {
      response.json(platforms);
    });
    return answer;
  });

  app.get("/platforms/:platform_slug", async (request, response) => {
    const answer = gameModel.findByPlatform(request.params.platform_slug).then((gamesForPlatform) => {
      response.json(gamesForPlatform);
    });
    return answer;
  });

  return app;
}
