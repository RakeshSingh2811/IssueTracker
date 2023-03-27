const express = require('express');
const router = express.Router()

//Calling Task Controller from the controllers
const task_controller = require('../controllers/task_controller');

//router to display all the tasks irrespective of the projects
router.get('',task_controller.all)

//Router to create Task Form irrespective of the Project 
router.get('/create/',task_controller.create1);

//Router to create Task Form for particular Project
router.get('/create/:id',task_controller.create);

//Router for submission of create Task Form
router.post('/add/',task_controller.add);

module.exports = router