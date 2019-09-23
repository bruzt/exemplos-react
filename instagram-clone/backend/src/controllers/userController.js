const userModel = require('../models/mongodb/userModel');

module.exports = {

    async show(req, res){

         try {
            
            const user = await userModel.findById(req.params.id);

            return res.json(user);
            
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    },

    async store(req, res){

        const verify = (req.body.name.trim() && req.body.email.trim() && req.body.password.trim());

        if(! verify){
            return res.sendStatus(400);
        }

        try {

            const user = await userModel.create(req.body);

            user.password = undefined;

            return res.json(user);
            
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    }
}
