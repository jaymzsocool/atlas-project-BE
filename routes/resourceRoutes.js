const express = require("express");
const resourceRoutes = express.Router();
const db = require("../database/dbConfig.js");

resourceRoutes.get("/", (req, res) => {
  db("resources")
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.send(err);
    });
});

resourceRoutes.post("/", (req, res) => {
  const resource = req.body;
  db.insert(resource)
    .into("resources")
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.send(err);
    });
});

resourceRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  db("resources")
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

resourceRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("resources")
    .where("id", id)
    .del()
    .then(res => {
      res.status(200).json(res);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = resourceRoutes;