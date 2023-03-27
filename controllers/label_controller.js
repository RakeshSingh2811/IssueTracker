const Label = require("../models/label")
//Controller for adding a Label form rendering
module.exports.addLabel = async function(req,res){
    return res.render('addLabel',{title:'Issue Tracker | add Label'})
}
//Controller for Creating a Label
module.exports.createLabel = async function(req,res){
    const label = await Label.create(req.body);
    req.flash('success', 'Label Created!');
    return res.redirect('back')
}