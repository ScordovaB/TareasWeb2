const express = require('express');
const router = express.Router();

router.get('',function(req,res){
    res.render('formulario');
});
router.post('',function(req,res){
    res.send('');
});

router.put('/:id',function(req,res){
    res.send('');
});
router.get('',function(req,res){
    res.send('');
});


module.exports = router;