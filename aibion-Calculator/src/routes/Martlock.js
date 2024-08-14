const express = require('express')
const router = express.Router()

const MartlockControllers = require('../app/controllers/MartlockControllers')

router.get('/get',MartlockControllers.GetData);

module.exports = router;