/////////////// ENV ////////////////////

const dotenv = require('dotenv');
const path = require('path');
const assert = require('assert');

const env = process.env.NODE_ENV || "development"; // se não passar nada é "development"
assert.ok(env === "production" || env === "development", 'invalid "env". Select "development" or "production"');

dotenv.config({
    path: path.join(__dirname, '../../config', `.${env}.env`) // Define as variaveis de ambiente
});

//////////////////////////////////////

const express = require('express');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

io.on('connection', (socket) => {

    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {

    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use('/files', express.static(path.join(__dirname, '../../uploads')));

app.use(routes);

server.listen(process.env.PORT, () => {
    console.log(`backend running on port: ${process.env.PORT}`);
})

module.exports = app;
