const express = require('express');
const nunjucks = require('nunjucks');
const { Pool } = require('pg');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('./public'));

nunjucks.configure('./', {
    express: server,
    noCache: true
});

const postgres = new Pool({
    user: 'cliente1',
    password: '123',
    host: 'localhost',
    port: 5432,
    database: 'tests'
});

server.get('/', async (req, res) => {

    try {
        
        const { rows: donors } = await postgres.query(`select * from "donors_maradev3"`);
    
        return res.render('./index.html', { donors });

    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
});

server.post('/', async (req, res) => {

    const { name, blood, email } = req.body; 

    if(!name || !blood || !email){

        return res.status(400).send('Todos os campos são obrigatórios');
    }

    try {

        await postgres.query(`insert into "donors_maradev3" ("name","email","blood") values ('${name}', '${email}', '${blood}')`);
    
        return res.redirect('/');
        
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
});

server.listen(3002);