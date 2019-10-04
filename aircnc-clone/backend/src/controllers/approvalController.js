const bookingModel = require('../models/mongodb/bookingModel');

module.exports = {

    async store(req, res){

        const { booking_id } = req.params;

        try {

            const booking = await bookingModel.findById(booking_id).populate('spot');

            booking.approved = true;

            await booking.save();

            const bookingUserSocket = req.connectedUsers[booking.user];

            if(bookingUserSocket){

                req.io.to(bookingUserSocket).emit('booking_response', booking);
            }

            return res.json(booking);
            
        } catch (error) {
            console.error(error);
            return res.sendStatus(500);
        }
    }
}