const express = require('express');
const ruta = require('./ruta');
const routes = require('./src/routes');
const {engine} = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('handlebars',engine());
app.set('view engine', 'handlebars');
app.set('views','./src/views');

const port = 3000;

app.use('/dist',express.static(path.join(__dirname,'dist')));
app.use('',routes);
ruta(app);

app.listen(port,function(){
    console.log('App tarea3 is running in port: ' + port);
});