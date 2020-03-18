const express = require('express');

const server = express();

server.use('/', (req, res) => {
  res.send(`<h2>Welcome to the homepage</h2>`);
});

module.exports = server;
