const userModel = require('../models/mongodb/userModel');

module.exports = {

    async store(req, res){

        const { email } = req.body;

        if(! /\S+@\S+\.\S+/.test(email)){
            return res.status(400).json({ error: 'Email invelid'});
        }

        try {
            
            let user = await userModel.findOne({ email });
    
            if(!user){
    
                user = await userModel.create({ email });
            }
    
            return res.json(user);

        } catch (error) {
            console.error(error);
            return res.status(500).send("error");
        }
    }
}




