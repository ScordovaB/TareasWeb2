function middleware(req,res,next){
    console.log("Paso por el middleware"); //se puede poner doble query separando por un amperson "&"
    if(req.query.token == '123'){ //Para recibir mas querys se pone http://localhost:3000/usuarios?token=123&usuario=santi
        req.usuario = 'Santiago';
        next();
    } 
    else{
        res.status(401).render('pError');
        //res.status(401).send("No pasas!, Ruta o Token Incorrecto!");
        
    }
}

module.exports = middleware;