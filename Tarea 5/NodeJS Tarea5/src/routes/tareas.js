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
 *       name: Crear una tarea
 *       description: Crear una tarea y agregar body
 *       schema:
 *         type: object
 *         properties:
 *         titulo:
 *           type:string
 *         status:
 *           type:string
 *         description:
 *           type:string
 *   responses:
 *     200:
 *       description: lista de tareas del usuario
 */


router.post('',express.json(),controller.crearT);
/** 
 * @swagger
 * /tareas/{id}:
 *  get:
 *   description: Ver una tarea específica
 *   parameters:
 *     - in: path
 *       name: id
 *       description: Ver de tarea con ese ID
 *       type: string
 *   responses:
 *     200:
 *       description: lista de tarea específica
 */
router.get('/:id',controller.verT);
/** 
 * @swagger
 * /tareas:
 *  get:
 *   description: Ver las tareas específicas
 *   parameters:
 *     - in: params
 *       name: VerTareaS
 *       description: Ver las tareas
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: lista de tarea específica
 */
router.get('',controller.listarT);

/** 
 * @swagger
 * /tareas/{id}:
 *  put:
 *   description: Actualizar una tarea específica
 *   parameters:
 *     - in: path
 *       name: id
 *       description: actualizar tarea con ese ID
 *       type: string
 *     - in: body
 *       name: Crear una tarea
 *       description: Crear una tarea y agregar body
 *       schema:
 *         type: object
 *         properties:
 *         titulo:
 *           type:string
 *         status:
 *           type:string
 *         description:
 *           type:string
 *   responses:
 *     200:
 *       description: actualizar tarea específica
 */
router.put('/:id',express.json(),controller.actualizarT);
/** 
 * @swagger
 * /tareas/{id}:
 *  delete:
 *   description: Eliminar una tarea específica
 *   parameters:
 *     - in: path
 *       name: id
 *       description: Eliminar tarea con ese iD
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: Eliminar de tarea específica
 */
router.delete('/:id',controller.eliminarT);



module.exports = router;