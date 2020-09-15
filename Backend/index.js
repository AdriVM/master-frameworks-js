'use strict'

var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/api-rest-blog';     //api-rest-blog es el nombre de la BBDD que vamos a crear
//var opciones = { useNewURLParser: true };

var app = require('./app');                             // Al ser un modulo creado por nosostros, no se encuentra en la carpeta node_modules,
                                                        // por lo que hay que pasarle el directorio donde se encuentra.

var port = 3900;                                        // El puerto que vamos a utilizar


mongoose.set('useFindAndModify', false);                //Deshabilitamos los métodos antiguos de mongoose

mongoose.Promise = global.Promise;
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {

            console.log('La conexión a la BBDD se ha realizado correctamente.');

            // CREAR EL SERVIDOR Y PONERME A ESCUCHAR PETICIONES HTTP
            app.listen(port, () => {
                
                console.log('Servidor corriendo en http://localhost:'+port);

            });

        });