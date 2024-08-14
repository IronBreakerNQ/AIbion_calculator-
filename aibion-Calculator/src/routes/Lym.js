const express = require('express')
const router = express.Router()

const LymControllers = require('../app/controllers/LymControllers')

router.get('/get',LymControllers.GetData);

router.get('/LFarm',LymControllers.LFarm);
router.get('/LRefine',LymControllers.LRefine);
router.get('/LCraft',LymControllers.LCraft);


module.exports = router;