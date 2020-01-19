const axios = require('axios');

const DevModel = require('../models/mongodb/DevModel');

const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../main/websocket');

module.exports = {
    
    async index(req, res){
    
        try {
    
            const result = await DevModel.find();
    
            return res.json(result);
            
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    },
    
    async store(req, res){

        const { github_username, techs, latitude, longitude } = req.body;

        const techsArray = parseStringAsArray(techs.toLowerCase());
       
        try {

            let dev = await DevModel.findOne({ github_username });

            if(! dev){
                
                const response = await axios.get(`https://api.github.com/users/${github_username}`);
        
                const { login, name = login, avatar_url, bio } = response.data;
       
                //if(! name) name = response.data.login;
              
                dev = await DevModel.create({
                    name,
                    github_username,
                    avatar_url,
                    bio,
                    techs: techsArray,
                    location: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    }
                });

                const sendSocketMessageTo = await findConnections({ latitude, longitude }, techsArray);
                
                sendMessage(sendSocketMessageTo, 'new-dev', dev);
            }

            return res.json(dev);
            
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    },
}