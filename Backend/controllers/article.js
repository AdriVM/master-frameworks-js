'use strict'

const { request } = require("express");

var validator = require('validator');
//Requerido para borrar ficheros de nuestro sistema de ficheros
var fs = require('fs');
var path = require('path');
var Article = require('../models/article');
const article = require("../models/article");
const { param } = require("../routes/article");

var controller = {

    datosCurso: (request, response) => {

        var hola = request.body.hola;

        return response.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'Victor Robles WEB',
            alumno: 'Adrián Vázquez Mirasierra',
            tecnología: 'NodeJS',
            hola
        });
    },

    test: (request, response) => {
        return response.status(200).send({
            message: 'Soy la acción test del controlador de artículos'
        });
    },

    save: (request, response) => {

        /**
         * 1.- Recoger los parámetros por post
         * 2.- Validar datos con Validator
         * 3.- Crear el objeto a guardar
         * 4.- Asignar valores al objeto
         * 5.- Guardar el articulo
         * 6.- Devolver una respuesta
         */

        //  1.- Recoger los parámetros por post
        var params = request.body;

        //  2.- Validar datos con Validator
        try {

            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        }
        catch (err) {
            return response.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar.'
            });
        }

        if (validate_title && validate_content) {

            //  3.- Crear el objeto a guardar

            var article = new Article();            // Instanciamos la clase del modelo

            //  4.- Asignar valores al objeto

            article.title = params.title;
            article.content = params.content;

            if (params.image) {

                article.image = params.image;

            } else {

                article.image = null;

            }
            console.log('BACKEND');
            console.log(article);
            console.log('FIN BACKEND');
            //  5.- Guardar el articulo

            article.save((err, articleStored) => {

                if (err || !articleStored) {

                    return response.status(404).send({
                        status: 'error',
                        message: 'El Artículo no se ha guardado'
                    });
                }

                //  6.- Devolver una respuesta

                return response.status(200).send({
                    status: 'success',
                    article: articleStored
                });

            });


        } else {

            return response.status(200).send({
                status: 'error',
                message: 'Los datos no son válidos.'
            });
        }

    },

    getArticles: (request, response) => {

        //Sacar ultimos articulos

        var query = Article.find({});             // Variable con la query

        var limit = request.params.limit;           //Recogemos el parametro limit de la url

        if (limit || limit != undefined) {          //Comprobamos que exista y no sea undefined

            query.limit(parseInt(limit));           //Aplicamos el valor que le pasamos por la url para limitar los contenidos

        }

        //  FIND (-_id ordena por id en orden inverso, más nuevos primero)
        query.sort('-_id').exec((err, articles) => {

            if (err) {

                return response.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los artículos.'
                });

            }

            if (!articles) {

                return response.status(404).send({
                    status: 'error',
                    message: 'No hay artículos para mostrar.'
                });

            }

            return response.status(200).send({
                status: 'success',
                articles
            });

        });


    },
    getArticle: (request, response) => {

        //  Recoger el ID de la URL
        var articleId = request.params.id;

        //  Comprobar que existe
        if (!articleId || articleId == null) {

            return response.status(404).send({
                status: 'error',
                message: 'No existe el artículo.'
            });

        }

        //  Buscar Artículo
        Article.findById(articleId, (err, article) => {

            if (err || !article) {
                return response.status(404).send({
                    status: 'error',
                    message: 'No existe el artículo.'
                });
            }

            //Devolver Artículo

            return response.status(200).send({
                status: 'success',
                article
            });


        });

    },
    update: (request, response) => {

        //Recoger el ID del artículo por la URL
        var articleId = request.params.id;

        //Recoger los datos que llegan por PUT
        var params = request.body;

        //Validar los datos
        try {

            var validate_title = !validator.isEmpty(params.title);

            var validate_content = !validator.isEmpty(params.content);



            //Enviar una respuesta

        } catch (err) {

            return response.status(200).send({
                status: 'error',
                message: 'Faltan datos para actualizar el artículo.'
            });

        }

        if (validate_title && validate_content) {

            //Hacer un find and update
            //new: true nos duelve un JSON con el elemto actualizado
            Article.findOneAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdated) => {

                if (err) {
                    return response.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar.'
                    });
                }

                if (!articleUpdated) {
                    return response.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo a modificar.'
                    });
                }

                return response.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });

            });

        } else {
            return response.status(200).send({
                status: 'error',
                message: 'La validación no es correcta.'
            });
        }

    },
    delete: (req, res) => {
        // Recogemos el id del articulo por la url
        var articleId = req.params.id;


        // Comprobar que si existe
        if (!articleId || articleId == null || articleId == undefined) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo!!!'
            })
        }

        // Buscar el articulo
        Article.findById(articleId, (err, article) => {
            if (err || !article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo!!!'
                })
            }

            if (article.image) {
                var file_name = article.image;
                var file_path = 'upload/articles/' + file_name;

                //console.log(file_path)

                fs.unlink(file_path, function (err) {
                    if (err) throw err;
                    console.log('file deleted');
                });
            }



            // find and Delete
            Article.findOneAndDelete({ _id: articleId }, (err, articleRemoved) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al eliminar!!!'
                    })
                }

                if (!articleRemoved) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No se ha borrado el articulo, posiblemente no exista!!!'
                    })
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleRemoved
                })
            })
        })
    },
    upload: (request, response) => {

        //Configurar el modulo connect multiparty en router/article.js (HECHO)

        //Recoger el fichero de la petición
        var file_name = 'Imagen no subida...';

        if (!request.files) {
            return response.status(404).send({
                status: 'error',
                message: file_name
            });
        }

        //Conseguir el nombre y la extensión del archivo
        var file_path = request.files.file0.path;
        var file_split = file_path.split('\\');
        /**      ADVERTENCIA LINUX O MAC     
         * var file_split = file_path.split('/');
        */

        //Sacamos el Nombre del archivo
        var file_name = file_split[2];

        //Sacamos la extensión del archivo
        var file_name_split = file_name.split('\.');
        var file_extension = file_name_split[1];

        //Comprobar la extensión, sólo imágenes, si no es válida la extensión, borrar el fichero
        if (file_extension != 'jpg' && file_extension != 'jpeg' && file_extension != 'png' && file_extension != 'gif') {

            //Borrar el archivo subido
            fs.unlink(file_path, (err) => {

                return response.status(500).send({
                    status: 'error',
                    message: 'La extensión de la imágen no es válida.'
                });

            });


        } else {
            //Si todo es válido, sacamos ID de la URL
            var articleId = request.params.id;

            if (articleId) {
                //Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                Article.findOneAndUpdate({ _id: articleId }, { image: file_name }, { new: true }, (err, articleUpdated) => {

                    if (err) {
                        return response.status(500).send({
                            status: 'error',
                            message: 'Error al agregar/modificar la imagen.'
                        });
                    }

                    if (!articleUpdated) {
                        return response.status(404).send({
                            status: 'error',
                            message: 'No existe el articulo al cual quiere agregar/modificar la imagen.'
                        });
                    }

                    return response.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                });
            } else {
                return response.status(200).send({
                    status: 'success',
                    image: file_name
                });
            }

        }

    },
    getImage: (request, response) => {

        //Sacamos el fichero que nos llega por la URL
        var file = request.params.image;

        //Sacamos el path completo
        var path_file = './upload/articles/' + file;

        //Comprobamos que la ruta existe
        if (fs.existsSync(path_file)) {

            return response.sendFile(path.resolve(path_file));

        } else {
            return response.status(404).send({
                status: 'error',
                message: 'La imagen no existe.'
            });
        }

    },
    search: (request, response) => {

        //Sacar el string a buscar
        var searchString = request.params.search;

        //Hacer Find OR
        /**
         * "$options": "i"                                                  Indica INCLUSIÓN
         * { 'title': { "$regex": searchString, "$options": "i" } },        Indica que si el searchString está incluido en el title.
         * { 'content': { "$regex": searchString, "$options": "i" } }       Indica que si el searchString está incluido en el content.
         *     
         */
        Article.find({
            "$or": [
                { 'title': { "$regex": searchString, "$options": "i" } },
                { 'content': { "$regex": searchString, "$options": "i" } }
            ]
        })
            .sort([['date', 'descending']])
            .exec((err, articles) => {

                if (err) {
                    return response.status(500).send({
                        status: 'error',
                        message: 'Error al buscar los artículos.'
                    });
                }

                if (!articles || articles.length <= 0) {
                    return response.status(404).send({
                        status: 'error',
                        message: 'No existen articulos que coincidan con la búsqueda.'
                    });
                }

                return response.status(200).send({
                    status: 'success',
                    articles
                });

            });//FIN DEL EXEC DEL FIND
    }

}; //END CONTROLLER

module.exports = controller;