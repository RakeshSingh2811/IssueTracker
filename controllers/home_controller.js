const Project = require('../models/project');
const Task = require('../models/task');
const Label = require('../models/label');
module.exports.home = async function(req,res){
    let projects = await Project.find({})
    .sort('-createdAt')
    .populate('tasks');
    let todo = await Task.find({status:'To do'});
    let inprogress = await Task.find({status:'In Progress'});
    let done = await Task.find({status:'Done'});
    return res.render('home',{
        title : "IssueTracker | home",
        projects : projects.length,
        todo : todo.length,
        inprogress : inprogress.length,
        done : done.length,
    })
}