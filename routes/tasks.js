const express = require('express');
const router = express.Router()
const task_controller = require('../controllers/task_controller');

router.get('',task_controller.all)
router.get('/create/',task_controller.create1);
router.get('/create/:id',task_controller.create);
router.post('/add/',task_controller.add);

module.exports = router