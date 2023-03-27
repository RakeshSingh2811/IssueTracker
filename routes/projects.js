const express = require('express');
const router = express.Router();

//Calling Project Controller from the controllers
const projects_controller = require('../controllers/projects_controller') 

//Router for Showing Projects List
router.get('',projects_controller.list);

//Router for creating Project Form 
router.get('/create/',projects_controller.create);

//Router for after submission of create project form
router.post('/add',projects_controller.add);

//Router for listing the tasks within the project
router.get('/project/:id',projects_controller.project)

module.exports = router