const express = require("express");
const server = express();
const cors = require("cors");
server.use(cors());
server.use(express.json());

const resourceRoutes = require('../routes/resourceRoutes.js');
const markupRoutes = require('../routes/markupRoutes.js');

server.use('/api/resources', resourceRoutes);
server.use('/api/markups', markupRoutes);

module.exports = server;