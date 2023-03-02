function middleware(req,res,next){
    console.log("pase por aqui!"); //se puede poner doble query separando por un amperson "&"
    next();
    /*
    if(req.query.token == '123'){ //Para recibir mas querys se pone http://localhost:3000/usuarios?token=123&usuario=santi
        req.usuario = 'Santiago';
        next();
    } 
    else{
        res.status(401).send("No pasas!");
    }*/
}

module.exports = middleware;