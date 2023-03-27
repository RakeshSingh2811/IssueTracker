const express = require('express');
const router = express.Router()
const projects_controller = require('../controllers/projects_controller') 
router.get('',projects_controller.list);
router.get('/create/',projects_controller.create);
router.post('/add',projects_controller.add);
router.get('/project/:id',projects_controller.project)

module.exports = router