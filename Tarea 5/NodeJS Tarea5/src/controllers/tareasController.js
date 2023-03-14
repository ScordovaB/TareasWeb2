//Funciones se utilizan en routes para los ruteos
const { response } = require('express');
const { findById } = require('../models/tarea');
const Tarea = require('../models/tarea'); //Este es modelo "Tarea";

const tareasController={
    listarT: function(req,res){
        let id = req.query.id;
        //console.log(id + " <- este fue el id");
        //como es Promesa, poner su then y catch
        Tarea.find({}).lean() //buscar por filtros adentro del parentesis
            //.lean() lo prepara para mandar un JSON y poder recibir los datos sin problema y mandarlos a front html(handlebars en este caso)
            // y es funcion de mongoose
            .then(response=>{
                console.log('respuesta', response);
                res.render('tareas',{tareas: response});
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
                res.status(200).send("Llego");
            })
            .catch(error=>{
                res.status(400).send('Error al verT');
            });
    }/*,
    crearT: function(req,res){
        Tarea.create(req.body,(err,doc)=>{
            if(err){
                console.log(err);
            }else{
                console.log(doc);
            }
        });

    },
    actualizarT: function(req,res){
        Tarea.findByIdAndUpdate(req.params.id,req.body,{ new: true },(err,doc)=>{
            if(err){
                console.log(err);
            }else{
                console.log(doc);
            }
        });
    },
    eliminarT: function(req,res){
        Tarea.findByIdAndDelete(req.params.id,(err,doc)=>{
            if(err){
                console.log(err);
            }else{
                console.log(doc);
            } 
        });
    }*/
    
}

module.exports = tareasController;