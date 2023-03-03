//Funciones se utilizan en routes para los ruteos
const { response } = require('express');
const Noticia = require('./../models/noticias'); //Este es modelo "Tarea";

const axios = require('axios');
const apiKeyN = '2412c167348648ca95a43d0d7a58a17d';


const noticiaController={
    listarN: function(req,res){
        let noticias=[];
        let queryQ = req.query.q;
        //como es Promesa, poner su then y catch
        
        Noticia.buscar(queryQ) //buscar por filtros adentro del parentesis
            .then(response=>{
                /*
                axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: queryQ,
                        apiKey: apiKeyN
                    }
                })
                .then(response => {
                    console.log("News mandados");
                    //noticias = response.data;
                    //console.log(noticias);
                    
                })
                .catch(error => {
                    console.log(error);
                });*/
                res.render('news',{noticias:response});
                //res.render('news',noticias); // poner adentro ,{tareas: response} o en este caso noticias:response
                
            })     
            .catch(error=>{
                res.status(400).send('Error al ListarN de noticias'); //EN ANGULAR, regresamos UN OBJETO, no Texto
            });
    },
    verN: function(req,res){

    },
    crearN: function(req,res){

    },
    actualizarN: function(req,res){

    },
    eliminarN: function(req,res){

    }
    
}

module.exports = noticiaController;