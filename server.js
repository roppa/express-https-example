const https = require('https');
const fs = require('fs');
const app = require('./app');

const options = {
  key: fs.readFileSync('./certs/localhost.key'),
  cert: fs.readFileSync('./certs/localhost.cert'),
  requestCert: false,
  rejectUnauthorized: false,
};

const port = process.env.PORT || 443;
const server = https.createServer(options, app);

server.listen(port, function () {
  console.log('Express server listening on port ' + server.address().port);
});
