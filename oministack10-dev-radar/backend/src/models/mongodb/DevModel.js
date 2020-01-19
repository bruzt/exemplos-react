const mongoose = require('../../database/mongodb/connection');

const DevScheema = new mongoose.Schema({

    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: new mongoose.Schema({
            type: {
                type: String,
                enum: ['Point'],
                require: true
            },
            coordinates: {
                type: [Number],
                require: true
            }
        }),
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Oministack10_Dev', DevScheema);