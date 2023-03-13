const path = require('path');
const express = require('express');
const { auth } = require('./src/middlewares');



function cargarHome(req, res) { //si hacemos esto app.get('/',cargarHome) se llama sin el parentesis
    const paginado = req.query.paginado === 'false' ? false : true;
    console.log("api works for: "+req.usuario);
    //const ruta = path.join(__dirname,'src', 'views','index.html');
    //res.sendFile(ruta);
    res.render('home',{
        techStack:"HTML,CSS, SASS, Javascript con NodeJS, en conjunto con express y handlebars"
    });
}
function paginaError(req,res){
   
    res.send('Token incorrecto');
    //res.render('pError');
}



module.exports = function (app) {

    app.get('/',auth,cargarHome);


    app.get('*', paginaError); //COMODIN siempre va al FINAL
}
