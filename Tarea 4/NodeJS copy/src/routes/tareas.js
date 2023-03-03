const express = require('express');
const router = express.Router();
const controller = require('./../controllers/tareasController');

router.post('',express.json(),function(req,res){
    console.log(req.body);
    res.send('Tarea creada');
    
});

router.get('',controller.listarT);

// router.get('',function(req,res){
//     const tareas = [
//         {titulo:'Tarea 1', status:'nueva'},
//         {titulo:'Tarea 2', status:'nueva'},
//         {titulo:'Tarea 3', status:'en progreso'},
//         {titulo:'Tarea 4', status:'en progreso'},
//         {titulo:'Tarea 5', status:'en progreso'},
//         {titulo:'Tarea 6', status:'terminada'},
//         {titulo:'Tarea 7', status:'terminado'},
//         {titulo:'Tarea 8', status:'terminado'},
//     ]
//     res.render('tareas',{
//         tareas
//     });
// });

router.put('/:id',function(req,res){
    res.send('tarea acutalizada Correcamente');
});
router.get('',function(req,res){
    res.send('lista de tareas');
});

router.get('/:id',function(req,res){
    const id = req.params.id;
    res.send('detalle de tareas de '+id);
});

module.exports = router;