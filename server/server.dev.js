const path = require('path');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.dev.js');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || '9060';
const compiler = webpack(config);
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: 'silent',
  })
);

app.use(
  webpackHotMiddleware(compiler, {
    log: false,
  })
);

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

server.listen(port, () => {
  console.log(`App listening to ${port}....`);
  console.log('Press Ctrl+C to quit.');
});
