const devModel = require('../models/mongodb/DevModel');

module.exports = {

    async store(req, res) {

        try {

            const loggedDev = await devModel.findById(req.headers.user);
            const targetDev = await devModel.findById(req.params.devId);
            
            if(! targetDev){
                return res.status(400).json({ error: 'dev not exists' });
            }

            loggedDev.dislikes.push(targetDev._id);
            await loggedDev.save();

            return res.json(loggedDev); 

        } catch (error) {
            console.log(error);
        }
    }
}