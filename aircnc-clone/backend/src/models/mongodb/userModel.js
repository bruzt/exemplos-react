const mongodb = require('../../database/mongodb/connection');

const userSchema = mongodb.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true
    }
},
{
    timestamps: true
});

module.exports = mongodb.model('aircnc_user', userSchema);
