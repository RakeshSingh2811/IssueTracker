const Project = require('../models/project')
const Task = require("../models/task");
const Label = require("../models/label");

// to render a Form for creating a Task for a particular Project
module.exports.create = async function(req,res){
 projects = await Project.findById(req.params.id);
 labels = await Label.find({});
 return res.render('createTask',{title:"Issue Tracker | Create Task",projects:projects,labels:labels})
}

// to render a Form for creating a Task irrespective of the Project
module.exports.create1 = async function(req,res){
    projects = await Project.find({});
    labels = await Label.find({});
    return res.render('createTask',{title:"Issue Tracker | Create Task",projects:projects,labels:labels})
   } 

// to add a Task to the particular Project
module.exports.add =async function(req,res){
    const project = await Project.findById(req.body.project);
    console.log(project)
    if(project)
    {
    const task = await Task.create(req.body);
    project.tasks.push(task);
    project.save();
    }
    req.flash('success', 'Task Created');
    return res.redirect(`/project/${req.body.project}`)
}

//to get all the tasks irrespective of the project
module.exports.all = async function(req,res){
    const tasks = await Task.find({}).populate('labels').populate('project');
    const labels = await Label.find({});
    return res.render('tasklist1',{title:"Issue Tracker | Tasks List",tasks:tasks,labels:labels})
}