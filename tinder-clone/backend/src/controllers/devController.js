const axios = require('axios');

const devModel = require('../models/mongodb/DevModel');

module.exports = {

    async index(req, res){

        try {

            const loggedDev = await devModel.findById(req.headers.user);

            const users = await devModel.find({
                $and: [
                    { _id: { $ne: loggedDev._id }}, // ne = not equal
                    { _id: { $nin: loggedDev.likes }}, // nin = not in
                    { _id: { $nin: loggedDev.dislikes }}
                ]
            });

            return res.json(users);
            
        } catch (error) {
            console.log(error);
        }
    },

    async store(req, res) {

        try {

            const userExists = await devModel.findOne({ user: req.body.username });

            if(userExists){
                return res.json(userExists);
            }

            const response = await axios.get(`https://api.github.com/users/${req.body.username}`);

            const dev = await devModel.create({ 
                name: response.data.name,
                user: req.body.username,
                bio: response.data.bio,
                avatar: response.data.avatar_url
            });
            
            return res.json(dev);

        } catch (error) {
            console.error(error);
        }
    }
}