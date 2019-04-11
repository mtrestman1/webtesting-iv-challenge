const express = require('express');
const helmet = require('helmet');

const playersRouter = require('./players/players-router')

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/players', playersRouter)

module.exports = server;