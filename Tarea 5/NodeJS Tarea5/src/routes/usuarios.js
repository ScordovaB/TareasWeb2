const express = require('express');
const router = express.Router();

router.post('',function(req,res){
    res.send('Usuarios creada');
});

router.put('/:id',function(req,res){
    res.send('Usuarios acutalizada Correcamente');
});
router.get('',function(req,res){
    res.send('lista de usuarios');
});

router.get('/:id',function(req,res){
    const id = req.params.id;
    res.send('detalle de usuario de '+id);
});

module.exports = router;