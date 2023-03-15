//Funciones se utilizan en routes para los ruteos
const { response } = require('express');
const { findById } = require('../models/tarea');
const Tarea = require('../models/tarea'); //Este es modelo "Tarea";

const tareasController={
    listarT: function(req,res){
        //let id = req.query.id;
        //console.log(id + " <- este fue el id");

        Tarea.find({}).lean() //buscar por filtros adentro del parentesis
            //.lean() lo prepara para mandar un JSON y poder recibir los datos sin problema y mandarlos a front html(handlebars)
            // y es funcion de mongoose
            .then(response=>{
                //console.log('respuesta', response);
                //res.render('tareas',{tareas: response});
                res.status(200).json(response);
            })     
            .catch(error=>{
                res.status(400).send('Error al ListarT'); //EN ANGULAR, regresamos UN OBJETO, no Texto
            });
        
    },
    verT: function(req,res){
        let idQ = req.params.id;
        console.log(idQ + " <- este fue el id");
        Tarea.findById({_id:idQ})
            
            .then(response=>{
                console.log("VerT ejectudo correctamente");
                console.log(response);
                res.status(200).json(response);
            })
            .catch(error=>{
                res.status(400).send('Error al verT');
            });
    },
    crearT: function(req,res){

        const newTarea= new Tarea({
            titulo:req.body.titulo,
            description: req.body.description,
            status: req.body.status
        })
        newTarea.save()
        .then(response=>{
            console.log("crearT ejectudo correctamente");
            console.log(response);
            res.status(200).json(response);
        })
        .catch(error=>{
            res.status(400).send('Error al crearT');
        });

    },
    actualizarT: function(req,res){
        Tarea.findByIdAndUpdate(req.params.id,req.body,{ new: true })
        .then(response=>{
            console.log("actualizarT ejectudo correctamente");
            console.log(response);
            res.status(200).json(response);
        })
        .catch(error=>{
            res.status(400).send('Error al actualizarT');
        });
    },
    eliminarT: function(req,res){
        Tarea.findByIdAndDelete({_id:req.params.id})
        .then(response=>{
            console.log("eliminarT ejectudo correctamente");
            console.log(response);
            res.status(200).json(response);
        })
        .catch(error=>{
            res.status(400).send('Error al eliminarT');
        });
    }
    
}

module.exports = tareasController;