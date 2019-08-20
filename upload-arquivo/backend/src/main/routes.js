const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

//////////// MIDWARES ///////////

const multerConfig = require('../util/multer.config');

/////////////////////////////////

const uploadController = require('../controllers/uploadController');

//////////// ROTAS //////////////

router.use('/', express.static(path.join(__dirname, '../views')));
router.use('/files', express.static(path.join(__dirname, '../../tmp/uploads')));

router.get('/posts', uploadController.index);
router.post('/posts', multer(multerConfig).single('file'), uploadController.store);
router.delete('/posts/:id', uploadController.destroy);

/////////////////////////////////

module.exports = router;