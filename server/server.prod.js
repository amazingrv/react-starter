const path = require('path');
const helmet = require('helmet');
const http = require('http');
const express = require('express');
const compression = require('compression');

const app = express();
const server = http.createServer(app);
const DIST_DIR = __dirname;
const port = process.env.PORT || '9060';
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());
app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

server.listen(port, () => {
  console.log(`App listening to ${port}....`);
  console.log('Press Ctrl+C to quit.');
});
