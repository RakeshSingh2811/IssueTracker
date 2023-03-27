const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router Linked');

router.use('/',require("./projects"));
router.use('/tasks/',require('./tasks'));
router.use('/label/',require("./label"))
module.exports = router;
 