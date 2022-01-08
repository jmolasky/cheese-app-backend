const express = require("express");
const cheesesRouter = express.Router();
const Cheese = require("../models/cheese");

// test route
cheesesRouter.get("/", (req, res) => {
  res.send("Cheese App");
});

// People index route
cheesesRouter.get("/cheeses", async (req, res) => {
  try {
    res.json(await Cheese.find({}));
  } catch (err) {
    res.status(400).json(err);
  }
});

// People Create Route
cheesesRouter.post("/cheeses", async (req, res) => {
  try {
    res.json(await Cheese.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

// People Delete Route
cheesesRouter.delete("/cheeses/:id", async (req, res) => {
  try {
    res.json(await Cheese.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

cheesesRouter.put("/cheeses/:id", async (req, res) => {
  try {
    res.json(
      await Cheese.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = cheesesRouter;
