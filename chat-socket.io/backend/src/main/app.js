/////////////// ENV ////////////////////

const dotenv = require('dotenv');
const path = require('path');
const assert = require('assert');

const env = process.env.NODE_ENV || "dev"; // se não passar nada é "dev"
assert.ok(env === "prod" || env === "dev", 'invalid "env". Select "dev" or "prod"');

dotenv.config({
    path: path.join(__dirname, '../../config', `.${env}.env`) // Define as variaveis de ambiente
});

//////////////////////////////////////

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');

const socketService = require('../services/socketio');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../views')));

socketService(io)
app.use(routes);

server.listen(process.env.PORT, () => {
    console.log(`backend running on port: ${process.env.PORT}`);
})

module.exports = app;