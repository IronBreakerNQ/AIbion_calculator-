const express = require('express')
const router = express.Router()

const BridgewatchControllers = require('../app/controllers/BridgewatchControllers')

router.get('/get',BridgewatchControllers.GetData);
router.get('/BWTable',BridgewatchControllers.BWTable);

router.get('/BWFarm',BridgewatchControllers.BWFarm);
router.get('/BWRefine',BridgewatchControllers.BWRefine);
 router.get('/BWCraft',BridgewatchControllers.BWCraft);
module.exports = router;