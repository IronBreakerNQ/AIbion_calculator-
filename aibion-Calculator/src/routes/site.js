const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.get('/',siteController.index);
router.get('/test',siteController.test);

module.exports = router;