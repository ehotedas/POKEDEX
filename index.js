//VAR EXPRESS
const express = require('express');
const server = express();
//VAR SERVER
const PORT = 3000;
const URL = `http://localhost:${PORT}`
//VAR ROUTE
const Router = require('./routes/home');
//VAR BODYPARSER
const bodyParser = require('body-parser');
//VAR HANDLEBAR
const {engine} = require('express-handlebars');

//CONFIG HANDLEBARS 
server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
server.set('views', 'views');


//CONFIG BODY PARSER 
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

//CONFIG STATIC PAST 'PUBLIC'
server.use(express.static('public'));

//USE ROUTE
server.use('/', Router);

//CONFIG LISTEN PORT 
server.listen(PORT,() => {return console.log(`SERVER OPEN IN ${URL}`)});

