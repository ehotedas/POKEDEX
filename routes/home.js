//VAR EXPRESS
const express = require("express");
const server = express();
//VAR CREATE ROUTE
const Router = express.Router();
//VAR REQUIRE API.JS
const api = require('../api');

//ROUTES
Router.get('/', (req,res) => {res.render('home')});

Router.post('/poke', async (req,res) => {

    //REQ BODY
    let name = req.body.name.toLowerCase();
    
    //API CONFIG
    try{
        const { data } = await api.get(`${name}`);
        const spritfront = `<img src="${data.sprites.front_default}">`
        const spritback = `<img src="${data.sprites.back_default}">`;
        const type = data.types[0].type.name.toUpperCase();
        const nome = data.name.toUpperCase();
        return res.render('index', {'spritfront': spritfront, 'spritback': spritback, 'type': type, 'nome': nome});
    } catch (error) {res.render('error')};

});

module.exports = Router;