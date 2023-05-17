const path = require('path');
const express = require('express');
//const { auth } = require('./src/middlewares');



function cargarHome(req, res) { //si hacemos esto app.get('/',cargarHome) se llama sin el parentesis
    const paginado = req.query.paginado === 'false' ? false : true;
    console.log("api works for: "+req.usuario);
    //const ruta = path.join(__dirname,'src', 'views','index.html');
    //res.sendFile(ruta);
    res.render('home',{
        nombre:req.query.usuario
    });
}



module.exports = function (app) {

    app.get('/',cargarHome);


    app.get('*', function (req, res) { //COMODIN siempre va al FINAL
        res.send('Pagina no Encontrada!');
    });
}