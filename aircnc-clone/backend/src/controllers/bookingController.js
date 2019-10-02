const bookingModel = require('../models/mongodb/bookingModel');

module.exports = {

    async store(req, res){

        const { user_id } = req.headers;
        const { spotId } = req.params;
        const { date } = req.body;

        try {

            const booking = await bookingModel.create({
                user: user_id,
                spot: spotId,
                date
            });

            await booking.populate('user').populate('spot').execPopulate();

            return res.json(booking);
            
        } catch (error) {
            console.error(error);
            return res.sendStatus(500);
        }
    }
}