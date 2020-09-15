'use strict'

/**
 * ##########################
 * SERVIDOR NodeJS 
 * ##########################
 * 
 * INSTRUCCIONES:
 * 1.- Cargar modulos de Node para crear el servidor
 * 2.- Ejecutar Express para hacer uso de HTTP
 * 3.- Cargar ficheros de Rutas
 * 4.- Middlewares (Se ejecutan antes que las Rutas)
 * 5.- Activar el CORS oara permitir peticiones desde el Front-end
 * 6.- Añadir prefijos a las Rutas / Cargar Rutas
 * 7.- Exportar el modulo (fichero actual) para poder ser usado desde fuera (index.js)
 * 
 * */


 // 1.- Cargar modulos de Node para crear el servidor
 var express = require('express');
 var bodyParser = require('body-parser');

 // 2.- Ejecutar Express para hacer uso de HTTP
 var app = express();


// 4.- Middlewares (Se ejecutan antes que las Rutas)
app.use(bodyParser.urlencoded({ extended: false }));   //  Inicia el bodyParser
app.use(bodyParser.json());                            // Convierte todo lo que reciba el bodyparser en un json


 // 3.- Cargar ficheros de Rutas
var article_routes = require('./routes/article');       //Cargo el archivo de rutas de articulos


 
 // 5.- Activar el CORS oara permitir peticiones desde el Front-end
 // Configurar cabeceras y cors - https://victorroblesweb.es/2018/01/31/configurar-acceso-cors-en-nodejs/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});




 // 6.- Añadir prefijos a las Rutas / Cargar Rutas

app.use('/api', article_routes);                           //Cargamos nuestras rutas en express. (http://localhost:3900/api/test-de-controlador, http://localhost:3900/api/datos-de-curso)



    //Rutas o Métodos de PRUEBA para el API REST
    /*
        app.post('/datos-curso', (request, response) => {

            var hola = request.body.hola;

            return response.status(200).send({
                curso: 'Master en Frameworks JS',
                autor: 'Victor Robles WEB',
                alumno: 'Adrián Vázquez Mirasierra',
                tecnología: 'NodeJS',
                hola
            });
        });
    */

 // 7.- Exportar el modulo (fichero actual) para poder ser usado desde fuera (index.js)
 module.exports = app;