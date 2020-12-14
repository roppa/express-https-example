const app = require('express')();

app.get('/', (req, res) => {
  res.end('Hi');
});

module.exports = app;
