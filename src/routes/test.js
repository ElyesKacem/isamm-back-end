const router = require('express').Router();
const testController = require('../controllers/test');


router.get('/', testController.testGet);


module.exports = router;