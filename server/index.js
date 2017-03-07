require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

const tweets = require('./routes/tweets');

app.use(cors({
    origin: 'http://localhost:8080',
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// register route
tweets(app, io)

// running
server.listen(5000, () => {
  console.log(`Listening on 5000`)
});
