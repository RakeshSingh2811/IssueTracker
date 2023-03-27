const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    tasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task"
    }]
},{
    timestamps:true
}); 
const Project = mongoose.model('Project',ProjectSchema)
module.exports = Project