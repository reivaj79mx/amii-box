const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

// controllers
const AmiiboCtrl = require('./controllers/amiibo-controller');

// routes
router.get('/amiibo/get', AmiiboCtrl.GetAll);
router.get('/amiibo/get/:id', AmiiboCtrl.GetOne);
router.put('/amiibo/set_own/:id', AmiiboCtrl.SetOwn);
router.get('/amiibo/get_series', AmiiboCtrl.getSeries);
router.post('/amiibo/add_amiibo', upload.single('image'), AmiiboCtrl.addAmiibo);

module.exports = router;