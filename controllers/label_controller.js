const Label = require("../models/label")
module.exports.addLabel = async function(req,res){
    return res.render('addLabel',{title:'Issue Tracker | add Label'})
}

module.exports.createLabel = async function(req,res){
    console.log(req.body);
    const label = await Label.create(req.body);
    return res.redirect('back')
}