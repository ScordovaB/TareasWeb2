const port = process.env.PORT || 3000; 

module.exports = {
    swaggerDefinition:{
        swagger: "2.0",
        info:{
            "title": "API Clase NodeJS",
            "description":"API ejemplo de proyecto NodeJS",
            "version":"1.0.0",
            "servers": ["http://localhost:"+port]
        }
    },
    apis:["src/routes/*.js"]
}