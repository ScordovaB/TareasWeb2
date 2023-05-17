const express = require('express');
const rutas = require('./rutas');
const routes = require('./src/routes');
const {engine} = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerConf = require('./swagger.config');

require('dotenv').config();

const app = express();

const mongoUrl = process.env.MONGO_URL;
console.log(mongoUrl);

app.engine('handlebars',engine());
app.set('view engine', 'handlebars');
app.set('views','./src/views');

//tomara valor del puerto desplegado PERO en local tomara 3000
const port = process.env.PORT || 3000; 

//archivos estaticos pasarlos asi: css, imagenes, algunos scripts, etc.
app.use('/assets',express.static(path.join(__dirname,'assets')));

const swaggerDocs = swaggerJsDoc(swaggerConf);
app.use('/swagger',swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('',routes);
rutas(app);

//Conexion con Mongoose, usando la url de MongoUrl por ejemplo del mongo atlas.
mongoose.connect(mongoUrl)
    .then(()=>{
        console.log('Se conecto a la base de datos (mongoose)');
        app.listen(port,function(){
            console.log('app is running in port: ' + port);
        });
    })
    .catch( err =>{
        console.log('No se pudo conectar a la base ded datos',err);
    });

