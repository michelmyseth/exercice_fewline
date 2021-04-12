import * as mongo from "mongodb";

const france = { name: "France", capital: "Paris", continent: "Europe" };

export function insertOneCountry(db: mongo.Db): Promise<string> | void {
  return db
    .collection("worldAtlas")
    .insertOne(france)
    .then((test) => {
      return test;
    });
}
