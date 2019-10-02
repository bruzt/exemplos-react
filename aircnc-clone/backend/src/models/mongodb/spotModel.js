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
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

spotSchema.virtual('thumbnail_url').get(function(){

    return `http://localhost:3001/files/${this.thumbnail}`;
});

module.exports = mongodb.model('aircnc_spot', spotSchema);
