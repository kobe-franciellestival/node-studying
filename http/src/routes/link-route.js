const express = require('express');
const router = express.Router();
const controller = require('../controllers/links-contoller');

//Definição das rotas que estão implementadas no controller
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);
router.get('/', controller.get); 
router.get('/:tags', controller.getByTag); 

module.exports = router;