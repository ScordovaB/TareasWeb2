//Funciones se utilizan en routes para los ruteos
const { response } = require('express');
const Tarea = require('./../models/tarea'); //Este es modelo "Tarea";

const tareasController={
    listarT: function(req,res){
        //como es Promesa, poner su then y catch
        Tarea.buscar() //buscar por filtros adentro del parentesis
            .then(response=>{
                res.render('tareas',{tareas: response});
            })     
            .catch(error=>{
                res.status(400).send('Error al ListarT'); //EN ANGULAR, regresamos UN OBJETO, no Texto
            });
    },
    verT: function(req,res){

    },
    crearT: function(req,res){

    },
    actualizarT: function(req,res){

    },
    eliminarT: function(req,res){

    }
    
}

module.exports = tareasController;