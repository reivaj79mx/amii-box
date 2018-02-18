const express = require('express');

const router = express.Router();

// controllers
const AmiiboCtrl = require('./controllers/amiibo-controller');

// routes
router.get('/amiibo/get', AmiiboCtrl.GetAll);
router.get('/amiibo/get/:id', AmiiboCtrl.GetOne);
router.put('/amiibo/set_own/:id', AmiiboCtrl.SetOwn);
router.get('/amiibo/get_series', AmiiboCtrl.getSeries);

module.exports = router;