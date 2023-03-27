const express = require('express');
const router = express.Router()
//Calling Label Controller from Controllers
const label_controller = require('../controllers/label_controller')

// Router for adding Labels Form 
router.get('/addLabel/',label_controller.addLabel);
//Router for post action for create Labels
router.post('/create/',label_controller.createLabel);

module.exports = router