const express = require('express');
const multer = require('multer');

const uploadConfig = require('../util/uploadConfig');

const router = express.Router();

const sessionController = require('../controllers/sessionController');
const spotController = require('../controllers/spotController');
const dashboardController = require('../controllers/dashboardController');
const bookingController = require('../controllers/bookingController');

//////////// ROTAS //////////////

//router.get('/sessions', sessionController.index);
router.post('/sessions', sessionController.store);

router.get('/spots', spotController.index);
router.post('/spots', multer(uploadConfig).single('thumbnail'), spotController.store);

router.get('/dashboard', dashboardController.show);

router.post('/spots/:spotId/booking', bookingController.store);

/////////////////////////////////

module.exports = router;