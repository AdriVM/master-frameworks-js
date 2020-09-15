'use strict'

var mongoose = require('mongoose');     // Importamos mongoose
var Schema = mongoose.Schema;           // Guardamos en una variable el esquema de mongoose para poder editarlo después

var ArticleSchema = Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
    image: String
});

module.exports = mongoose.model('Article', ArticleSchema);          //Exportamos el modelo definiendo el nombre y el esquema de dicho modelo

/**
 * NOTA:
 * Mongoose se encarga de crear en mongoDB los documentos según nuestro modelo, 
 * esto lo consigue pluralizando el nombre del modelo para nombrar la coleccion de documentos:
 * 
 * articles -> guarda documentos de tipo Article con la estructura definida en la colección.
 */