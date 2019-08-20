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
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

app.use(cors({ origin: process.env.ALLOWED_CORS_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(expressValidator());

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`backend iniciado na porta ${process.env.PORT}`);
});

module.exports = app;
