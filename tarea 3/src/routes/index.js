const router = require('express').Router();
const rutaFormulario = require('./form');
const rutaImagenes = require('./imag');
const datosP = require('./datosP');
const {auth}  = require('./../middlewares');


router.use('',auth);
router.use('/formulario',rutaFormulario);
router.use('/imagenes',rutaImagenes);
router.use('/datos',datosP);

module.exports = router;