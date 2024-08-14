const express = require('express')
const router = express.Router()

const BridgewatchControllers = require('../app/controllers/BridgewatchControllers')

router.get('/get',BridgewatchControllers.GetData);
router.get('/BWTable',BridgewatchControllers.BWTable);
module.exports = router;