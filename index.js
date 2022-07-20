const express = require('express');
const server = express();
const PORT = 3000;
const URL = `http://localhost:${PORT}`
const Router = require('./routes/home');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');

//CONFIG HANDLEBARS 
server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
server.set('views', 'views');


//CONFIG BODY PARSER 
server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

server.use(express.static('public'));

server.use('/', Router);

server.listen(PORT,() => {return console.log(`Servidor OPEN in ${URL}`)});

