const express = require('express');
const router = express.Router();
const controller = require('../controllers/tareasController');
//Docuemntacion para Swagger
/** 
 * @swagger
 * /tareas:
 *  post:
 *   description: Crear una nueva tarea
 *   parameters:
 *     - in: body
 *       name: titulo
 *       description: descripcion de tarea
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: lista de tareas del usuario
 */


//router.post('',controller.crearT);
router.get('/:id',controller.verT);
router.get('',controller.listarT);


//router.put('/:id',controller.actualizarT());

//router.delete('/:id',controller.eliminarT());
//router.get('',function(req,res){
//    res.send('lista de tareas');
//});

//router.get('/:id',controller.verT);

module.exports = router;