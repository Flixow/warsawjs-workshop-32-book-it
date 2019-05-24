const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const compression = require('compression');
const secure = require('ssl-express-www');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handler = routes.getRequestHandler(app);
const server = express();

server.disable('x-powered-by');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(compression());
if (!dev) {
  server.use(secure);
}

app.prepare().then(() => {
  server.use(handler);

  server.listen(PORT, err => {
    if (err) throw err;

    console.log(`> App running on port ${PORT}`);
  });
});
