const express = require('express')
const router = express.Router()

const ThetfordControllers = require('../app/controllers/ThetfordControllers')

router.get('/get',ThetfordControllers.GetData);

router.get('/TFFarm',ThetfordControllers.TFFarm);
router.get('/TFRefine',ThetfordControllers.TFRefine);
 router.get('/TFCraft',ThetfordControllers.TFCraft);


module.exports = router;