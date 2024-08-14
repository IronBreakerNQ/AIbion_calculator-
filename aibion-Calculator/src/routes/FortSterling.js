const express = require('express')
const router = express.Router()

const FortSterlingControllers = require('../app/controllers/FortSterlingControllers')

router.get('/get',FortSterlingControllers.GetData);

router.get('/FSFarm',FortSterlingControllers.LFarm);
router.get('/FSRefine',FortSterlingControllers.LRefine);
 router.get('/FSCraft',FortSterlingControllers.FSraft);


module.exports = router;