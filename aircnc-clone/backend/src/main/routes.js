const express = require('express');
const multer = require('multer');

const uploadConfig = require('../util/uploadConfig');

const router = express.Router();

const sessionController = require('../controllers/sessionController');
const spotController = require('../controllers/spotController');
const dashboardController = require('../controllers/dashboardController');
const bookingController = require('../controllers/bookingController');
const approvalController = require('../controllers/approvalController');
const rejectionController = require('../controllers/rejectionController');

//////////// ROTAS //////////////

//router.get('/sessions', sessionController.index);
router.post('/sessions', sessionController.store);

router.get('/spots', spotController.index);
router.post('/spots', multer(uploadConfig).single('thumbnail'), spotController.store);

router.get('/dashboards', dashboardController.show);

router.post('/spots/:spotId/booking', bookingController.store);

router.post('/bookings/:booking_id/approvals', approvalController.store);

router.post('/bookings/:booking_id/rejections', rejectionController.store);

/////////////////////////////////

module.exports = router;