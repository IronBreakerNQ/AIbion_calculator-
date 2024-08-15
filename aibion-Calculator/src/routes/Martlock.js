const express = require('express')
const router = express.Router()

const MartlockControllers = require('../app/controllers/MartlockControllers')

router.get('/get',MartlockControllers.GetData);
router.get('/MFarm',MartlockControllers.MFarm);
router.get('/MRefine',MartlockControllers.MRefine);
 router.get('/MCraft',MartlockControllers.MCraft);


module.exports = router;