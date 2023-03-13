const express = require('express');
const rutas = require('./rutas');
const routes = require('./src/routes');
const {engine} = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('handlebars',engine());
app.set('view engine', 'handlebars');
app.set('views','./src/views');

const port = 3000;

app.use('/assets',express.static(path.join(__dirname,'assets')));
app.use('',routes);
rutas(app);

app.listen(port,function(){
    console.log('app is running in port: ' + port);
});