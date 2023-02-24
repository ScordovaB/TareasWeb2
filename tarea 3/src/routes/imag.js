const express = require('express');
const router = express.Router();

router.get('',function(req,res){
    res.render('imagenes');
});

router.post('',function(req,res){
    res.send('Imagen creada');
});

router.put('/:id',function(req,res){
    res.send('Imagen actualizada');
});
router.get('/:id',function(req,res){
    const id = req.params.id;
    res.send('Imagen con id'+id);
});


module.exports = router;