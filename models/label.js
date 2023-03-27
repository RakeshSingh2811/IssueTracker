const mongoose = require('mongoose');

const labelSchema = new mongoose.Schema({
    //Label Name
    name:{
        type:String,
        required:true,
    }
},{timestamps:true})

const Label = mongoose.model("Label",labelSchema);
module.exports = Label;