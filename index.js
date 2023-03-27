const express = require('express');
var bodyParser = require('body-parser');
const path = require('path'); 
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
const session =require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const customMware=require('./config/middleware');

const port = 8000;
const expressLayouts= require('express-ejs-layouts');
const db= require("./config/mongoose");
app.use(express.static(path.join(__dirname,'assets')));

//Making uploads folder accessable to the browser
app.use('/uploads',express.static(__dirname+'/uploads'))

app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.set('view engine','ejs');
app.set('views','./views');
app.use(session({
    name:'codeial',
    //to do change secret before  mobing to production
    secret:"Rakesh",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store:new MongoStore({
        mongooseConnection:db,
        autoRemove:'disabled',
    })
}));

app.use(flash());
app.use(customMware.setFlash);
app.use('/',require('./routes'));


app.listen(port,function(err){
    if(err)
    {
        console.log(`Error while running the server:${err}`);
    }
    console.log(`Server Running On Port:${port}`);
}) 