const express = require("express");
const markupRoutes = express.Router();
const db = require("../database/dbConfig.js");

markupRoutes.get("/", (req, res) => {
  db("markups")
    .then(markups => {
      res.status(200).json(markups);
    })
    .catch(err => {
      res.send(err);
    });
});

markupRoutes.post("/", (req, res) => {
  const markup = req.body;
  db.insert(markup)
    .into("markups")
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.send(err);
    });
});

markupRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  db("markups")
    .where("id", id)
    .update(changes)
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      res.send(err);
    });
});

markupRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("markups")
    .where("id", id)
    .del()
    .then(res => {
      res.status(200).json(res);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = markupRoutes;