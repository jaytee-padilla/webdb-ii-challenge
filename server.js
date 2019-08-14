const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

// API check
server.get('/', (req, res) => {
	res.send(`<h1>API is running</h1>`)
});

// routes
const carsRoute = require('./routes/carsRoute');
server.use('/cars', carsRoute);

module.exports = server;