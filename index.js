const express = require('express');

//body parser requirement

const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();

//for parsing data while form submits
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Flash requirements
const session =require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const customMware=require('./config/middleware');


//port number
const port = process.env.PORT || 8000;

//using ejs Layouts
const expressLayouts= require('express-ejs-layouts');

//Db Connection
const db= require("./config/mongoose");
app.use(express.static(path.join(__dirname,'assets')));

//Making uploads folder accessable to the browser
app.use('/uploads',express.static(__dirname+'/uploads'))

//setting up ejs layouts
app.use(expressLayouts);

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//Setting up view Engine
app.set('view engine','ejs');
//setting up views folders

app.set('views','./views');

//Flash Setups
app.use(session({
    name:'codeial',
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

//links the Routes
app.use('/',require('./routes'));

//starting up the server 
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error while running the server:${err}`);
    }
    console.log(`Server Running On Port:${port}`);
}) 