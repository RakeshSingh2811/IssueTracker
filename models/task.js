const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['To do','In Progress',"Done"],
        default:'To do'
    },
    author:{
        type:String,
        required:true,
    },
    labels:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Label',
    }],
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }
},{timestamps:true});
const Task = mongoose.model('Task',TaskSchema);
module.exports = Task;