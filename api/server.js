const express = require("express");

const carsRouter = require("./cars/cars-router");

const server = express();

server.use(express.json());

server.use("/api/cars", carsRouter);

// CRUD
// CREATE = POST
// READ = GET
// UPDATE = PUT/PATCH
// DELETE = DELETE

// DO YOUR MAGIC

module.exports = server;
