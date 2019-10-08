const express = require('express');
const helmet = require('helmet');
const DataRouter = require('../db/dbRouter.js');

const server = express();

server.use(logger);
server.use(helmet());
server.use(express.json());

server.use('/api/cars', DataRouter);

server.get('/', (req, res) => {
    res.send('<h2>Hello dudes</h2>');
})

//making a logger for when testing api endpoints
function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
    next();
};

module.exports = server;