const express = require('express');
const router = express.Router()
const label_controller = require('../controllers/label_controller')


router.get('/addLabel/',label_controller.addLabel);
router.post('/create/',label_controller.createLabel);

module.exports = router