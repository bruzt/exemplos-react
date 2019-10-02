const mongodb = require('../../database/mongodb/connection');

const spotSchema = mongodb.Schema({

    thumbnail: {
        type: String
    },

    company: {
        type: String
    },

    price: {
        type: Number
    },
    
    techs: [{
        type: String,
    }],

    user: {
        type: mongodb.Schema.Types.ObjectId,
        ref: 'aircnc_user'
    }
},
{
    timestamps: true
});

module.exports = mongodb.model('aircnc_spot', spotSchema);
