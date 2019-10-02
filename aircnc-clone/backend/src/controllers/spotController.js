const fs = require('fs');

const spotModel = require('../models/mongodb/spotModel');
const userModel = require('../models/mongodb/userModel');

module.exports = {

    async index(req, res){

        const { tech } = req.query;

        try {

            const spots = await spotModel.find({ techs: tech });

            return res.json(spots);
            
        } catch (error) {
            console.error(error);
            return res.sendStatus(500);
        }
    },

    async store(req, res) {

        const { filename, path: filePath } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;
       
        try {

            const user = await userModel.findById(user_id);

            if(! user){

                fs.unlinkSync(filePath);

                return res.status(400).json({ error: 'user does not exists' });
            } 
                
            const spot = await spotModel.create({
                user: user_id,
                thumbnail: filename,
                company,
                techs: techs.split(',').map( (tech) => tech.trim()),
                price
            });
            
            return res.json(spot);

        } catch (error) {
            console.error(error);
            return res.sendStatus(500);
        }
    }
}