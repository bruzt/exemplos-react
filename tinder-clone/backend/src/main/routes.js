const express = require('express');

const devController = require('../controllers/devController');
const likeController = require('../controllers/likeController');
const dislikeController = require('../controllers/dislikeController');

const router = express.Router();

/////////// ROTAS ///////////////

router.get('/devs', devController.index);
router.post('/devs', devController.store);
router.post('/devs/:devId/likes', likeController.store);
router.post('/devs/:devId/dislikes', dislikeController.store);

/////////////////////////////////

module.exports = router;