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
const expressValidator = require('express-validator');
const cors = require('cors');

const routes = require('./routes');

const app = express();

/////////
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', (socket) => {
    
    const { user } = socket.handshake.query;
    
    connectedUsers[user] = socket.id;
});

app.use( (req, res, next) =>{

    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});
/////////

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use(express.static(path.join(__dirname, '../views')));

app.use(routes);

server.listen(process.env.PORT, () => {
    console.log(`backend running on port: ${process.env.PORT}`);
})

module.exports = server;
