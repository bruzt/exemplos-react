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

const routes = require('./routes');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use('/files', express.static(path.join(__dirname, '../../uploads')));

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`backend running on port: ${process.env.PORT}`);
})

module.exports = app;
