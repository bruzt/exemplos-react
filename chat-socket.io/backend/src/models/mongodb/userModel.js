const bcrypt = require('bcrypt');

const mongodb = require('../../database/mongodb/connection');

const userSchema = mongodb.Schema({
    
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    level: {
        type: Number,
        required: true,
        default: 4
    }
},
{
    timestamps: true
});

userSchema.pre('save', async function(next) {

    let user = this;

    if (! user.isModified('password')){
        return next();
    } 

    try {

        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(user.password, salt);

        user.password = hash;

        next();
        
    } catch (error) {
        next(error);
    }
});

module.exports = mongodb.model('cl_user', userSchema);
