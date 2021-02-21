import express from "express";
import * as data from "./sample-data.js";

const app = express();

app.get("/restaurants", async (req, res) => {
  const limit = +req.query.limit || 5;
  const offset = +req.query.offset || 0;
  const restaurants = data.restaurants;
  res.json({
    rows: restaurants.slice(offset, offset + limit),
    count: data.restaurants.length,
  });
});
