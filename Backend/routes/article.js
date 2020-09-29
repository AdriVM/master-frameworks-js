'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

 //Configurar el modulo connect multiparty
 var multipart = require('connect-multiparty');
 var middleware_upload = multipart({ uploadDir: './upload/articles'});

//RUTAS DE PRUEBA
router.post('/datos-de-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);

//RUTAS ÚTILES
router.post('/save', ArticleController.save);
router.get('/articles/:limit?', ArticleController.getArticles);      //:limit? indica un parámetro opcional (lo indica la ?)
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
router.post('/upload-image/:id?',middleware_upload, ArticleController.upload);
router.get('/get-image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search);

module.exports = router;