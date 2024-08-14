const express = require('express')
const router = express.Router()

const MaterialControllers = require('../app/controllers/MaterialControllers')

router.get('/get',MaterialControllers.GetDataMaterial);
router.get('/MTTable',MaterialControllers.MTTable);
module.exports = router;