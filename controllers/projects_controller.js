const Project = require('../models/project');
const Task = require('../models/task');
const Label = require('../models/label');

//to render the Project List
module.exports.list = async function(req,res){
    let projects = await Project.find({})
    .sort('-createdAt')
    .populate('tasks');
    return res.render('projectsList',{title:"Issue Tracker | Projects list",projects:projects}) 
}


//to Render the create Project Form
module.exports.create = function(req,res){
    return res.render('createproject',{title:"Issue Tracker | Create Project"})
}

//to Add a Project to DB
module.exports.add = async function(req,res){
    let project = await Project.create(req.body);
    req.flash('success', 'Project Created!');
    return res.redirect('/');
}

// to get the list of Tasks within the project
module.exports.project= async function(req,res){
    id = req.params.id;
    tasks = await Task.find({project:id}).populate('labels').populate('project');
    labels = await Label.find({}); 
    if(req.params.id){
        project= req.params.id;
    }
    else{
        project = '';
    }
    return res.render('tasklist',{title:"Issue Tracker | Project List",project:project,tasks:tasks,labels:labels})
}