import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("OK").status(200);
});

export { app };
