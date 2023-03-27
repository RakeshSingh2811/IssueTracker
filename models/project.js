const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    //Project Name
    name:{
        type:String,
        required:true,
        unique:true,
    },
    //Project Description
    description:{
        type:String,
        required:true,
    },
    //Project Author
    author:{
        type:String,
        required:true,
    },
    //list of tasks within the Projects
    tasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task"
    }]
},{
    timestamps:true
}); 
const Project = mongoose.model('Project',ProjectSchema)
module.exports = Project