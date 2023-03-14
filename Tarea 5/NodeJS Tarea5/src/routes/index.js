const router = require('express').Router();
const rutasTareas = require('./tareas');
const rutasUsuarios = require('./usuarios');
const {auth}  = require('../middlewares');


router.use('',auth);
router.use('/tareas',rutasTareas);
router.use('/usuarios',rutasUsuarios);

module.exports = router;