const uploadModel = require('../models/mongodb/uploadModel');

module.exports = {

    async index(req, res){

        try {

            const total = await uploadModel.estimatedDocumentCount();

            const posts = await uploadModel.find().populate('user').skip(parseInt(req.query.skip)).limit(parseInt(req.query.limit));

            return res.header({ 'x-total-count': total }).json(posts);
            
        } catch (error) {
            console.error(error);
        }
    },

    async store(req, res) {

        try {
            
            const post = await uploadModel.create({
                name: req.filename,
                size: req.file.size,
                key: req.file.key,
                url: req.file.location || `${process.env.APP_URL}/files/${req.file.key}`,
                user: req.body.userId,
                comments: JSON.parse(req.body.comment)
            });
            
            return res.json(post);
            
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
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