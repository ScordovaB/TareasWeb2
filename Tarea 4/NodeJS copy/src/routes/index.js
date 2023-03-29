const router = require('express').Router();
//const rutasTareas = require('./tareas');
//const rutasUsuarios = require('./usuarios');
const rutaNoticias = require('./noticias');
const {auth}  = require('./../middlewares');



//router.use('',auth);
router.use('',auth);
router.use('/noticias',rutaNoticias);
//router.use('/tareas',rutasTareas);
//router.use('/usuarios',rutasUsuarios);

module.exports = router;