/* global db */

// write your MongoDB shell command here
db.worldAtlas.insertMany([
  {
    name: "France",
    capital: "Paris",
    continent: "Europe",
  },
  {
    name: "Allemagne",
    capital: "Berlin",
    continent: "Europe",
  },
  {
    name: "Japon",
    capital: "Tokyo",
    continent: "Asie",
  },
]);
