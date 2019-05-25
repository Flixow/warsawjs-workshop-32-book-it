const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const compression = require('compression');
const secure = require('ssl-express-www');
const nextI18NextMiddleware = require('next-i18next/middleware');
const multer = require('multer');
const upload = multer();

const nextI18next = require('./i18n');
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

function missingKeyHandler(i18next, options) {
  options = options || {};

  return (req, res) => {
    const lng = req.params[options.lngParam || 'lng'];
    const ns = req.params[options.nsParam || 'ns'];

    if (!i18next.services.backendConnector) return res.status(404).send('missingKeyHandler:: no backend configured');
    if (!req.body) return res.status(400).send('missingKeyHandler:: no body');

    Object.entries(req.body).forEach(([key, value]) => {
      i18next.services.backendConnector.saveMissing([lng], ns, key, value);
    });

    res.send('ok');
  };
}

server.post('/static/locales/add/:lng/:ns', upload.none(), missingKeyHandler(nextI18next.i18n));

app.prepare().then(() => {
  server.use(nextI18NextMiddleware(nextI18next));
  server.use(handler);

  server.listen(PORT, err => {
    if (err) throw err;

    console.log(`> App running on port ${PORT}`);
  });
});
