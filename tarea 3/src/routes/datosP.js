const express = require('express');
const router = express.Router();

router.get('',function(req,res){
    res.render('Mis datos');
});
router.post('',function(req,res){
    res.send('Dato creado');
});

router.put('/:id',function(req,res){
    res.send('Dato actualizado');
});
router.get('/:id',function(req,res){
    const id = req.params.id;
    res.send('dato con id:'+id);
});


module.exports = router;