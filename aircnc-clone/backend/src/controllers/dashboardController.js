const spotModel = require('../models/mongodb/spotModel');
const userModel = require('../models/mongodb/userModel');

module.exports = {

    async show(req, res){

        const { user_id } = req.headers;

        try {

            const user = await userModel.findById(user_id);

            if(! user) return res.status(400).json({ error: 'user does not exists' });
            
            const spots = await spotModel.find({ user: user_id });

            return res.json(spots);
            
        } catch (error) {
            console.error(error);
            return res.sendStatus(500);
        }
    }
}