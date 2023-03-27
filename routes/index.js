const express = require('express');
const router = express.Router();
// Home Controller from which all the routes are redirected
const homeController = require('../controllers/home_controller');

console.log('router Linked');
//router for projects
router.use('/',require("./projects"));
//router for Tasks
router.use('/tasks/',require('./tasks'));
//router for Labels
router.use('/label/',require("./label"))
module.exports = router;
 