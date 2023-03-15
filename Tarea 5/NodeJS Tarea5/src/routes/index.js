const router = require('express').Router();
const rutasTareas = require('./tareas');
//const rutasUsuarios = require('./usuarios');
//const {auth}  = require('../middlewares');


router.use('',(req,res,next)=>{next()});
router.use('/tareas',rutasTareas);
//router.use('/usuarios',rutasUsuarios);

module.exports = router;