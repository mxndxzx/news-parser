const express = require('express');
const controller = require('../controllers/news.controller');

const router = express.Router();

router
    // Get 1 noticia
    .get('/get/:articleId', controller.getOne)

    // Get todas las noticias
    .get('/getAll', controller.getAll)

    // Guardar una noticia
    .post('/save', controller.save)

    // Actualizar una noticia
    .put('/update/:articleId', controller.update)

    // Borrar una noticia
    .delete('/drop/:articleId', controller.delete);

module.exports = router;