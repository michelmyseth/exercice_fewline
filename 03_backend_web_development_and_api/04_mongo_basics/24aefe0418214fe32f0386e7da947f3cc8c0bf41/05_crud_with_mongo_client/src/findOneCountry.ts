import * as mongo from "mongodb";

export function findOneCountry(db: mongo.Db): Promise<void> {
  return db.collection("worldAtlas").findOne({ name: "Iceland" });
}
