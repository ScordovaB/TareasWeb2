const express = require('express');
const router = express.Router();

router.get('',function(req,res){
    res.render('formulario');
});
router.post('',function(req,res){
    res.send('contacto Creado');
});

router.put('/:id',function(req,res){
    res.send('Contacto actualizado');
});
router.get('/:id',function(req,res){
    const id = req.params.id;
    res.send('Contacto con id'+id);
});


module.exports = router;
