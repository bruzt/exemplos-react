const express = require('express');

const router = express.Router();

const devController = require('../controllers/devController');
const searchController = require('../controllers/searchController');

//////////// ROTAS //////////////

router.get('/devs', devController.index);
router.post('/devs', devController.store);

router.get('/search', searchController.index);

/////////////////////////////////

module.exports = router;