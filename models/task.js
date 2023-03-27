const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    //Task Name
    name:{
        type:String,
        required:true,
    },
    // Task Description
    description:{
        type:String,
        required:true,
    },
    //Task Author
    author:{
        type:String,
        required:true,
    },
    //List of Labels Associated with the particular task
    labels:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Label',
    }],
    //Project Reference
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }
},{timestamps:true});
const Task = mongoose.model('Task',TaskSchema);
module.exports = Task;