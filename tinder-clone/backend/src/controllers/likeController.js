const devModel = require('../models/mongodb/DevModel');

module.exports = {

    async store(req, res) {
        
        try {

            const loggedDev = await devModel.findById(req.headers.user);
            const targetDev = await devModel.findById(req.params.devId);
            
            if(! targetDev){
                return res.status(400).json({ error: 'dev not exists' });
            }

            if(targetDev.likes.includes(loggedDev._id)){

                const loggedSocket = req.connectedUsers[req.headers.user];
                const targetSocket = req.connectedUsers[req.params.devId];
                
                if(loggedSocket){

                    req.io.to(loggedSocket).emit('match', targetDev);
                }

                if(targetSocket){

                    req.io.to(targetSocket).emit('match', loggedDev);
                }
            }

            loggedDev.likes.push(targetDev._id);
            await loggedDev.save();

            return res.json(loggedDev); 

        } catch (error) {
            console.log(error);
        }
    }
}