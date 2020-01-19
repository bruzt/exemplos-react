
const DevModel = require('../models/mongodb/DevModel');

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

    async index(req, res) {

        const { latitude, longitude, techs } = req.query;

        const techsArray = parseStringAsArray(techs.toLowerCase());

        try {
            
            const dev = await DevModel.find({
                techs: { 
                    $in: techsArray
                },
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude]
                        },
                        $maxDistance: 10000, // 10km
                    }
                }
            });
    
            return res.json(dev);

        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    },
}