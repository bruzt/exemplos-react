const mongodb = require('../../database/mongodb/connection');

const bookingSchema = mongodb.Schema({
    
    date: {
        type: String,
    },

    approved: {
        type: Boolean
    },

    user: {
        type: mongodb.Schema.Types.ObjectId,
        ref: 'aircnc_user'
    },

    spot: {
        type: mongodb.Schema.Types.ObjectId,
        ref: 'aircnc_spot'
    }
},
{
    timestamps: true
});

module.exports = mongodb.model('aircnc_bookings', bookingSchema);