const express = require('express');
const router = express.Router();
const controller = require('./../controllers/noticiasController');

router.post('',function(req,res){
    res.send('Noticias Post');
});

router.get('',controller.listarN);

router.put('/:id',function(req,res){
    res.send('noticia actualizada');
});
router.get('',function(req,res){
    res.send('lista de Noticias');
});

router.get('/:id',function(req,res){
    const id = req.params.id;
    res.send('detalle de noticia de '+id);
});

module.exports = router;