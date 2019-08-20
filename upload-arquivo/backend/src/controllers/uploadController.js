const uploadModel = require('../models/mongodb/uploadModel');

module.exports = {

    async index(req, res){

        try {

            const posts = await uploadModel.find();

            return res.json(posts);
            
        } catch (error) {
            console.error(error);
        }
    },

    async store(req, res) {

        try {

            const post = await uploadModel.create({
                name: req.file.originalname,
                size: req.file.size,
                key: req.file.key,
                url: req.file.location || `${process.env.APP_URL}/files/${req.file.key}`
            });
            
            return res.json(post);
            
        } catch (error) {
            console.error(error);
        }
    },

    async destroy(req, res){

        try {

            const post = await uploadModel.findOne({ _id: req.params.id });

            post.remove();
            
            return res.send(true);

        } catch (error) {
            console.log(error);
        }
    }
};