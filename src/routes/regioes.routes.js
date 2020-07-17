/**
 * Arquivo: src/routes/orgao.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionadas aos estados
 * e municípios do MonitorCidadão
 */

const router = require('express-promise-router')();
const regioesController = require('../controllers/regioes.controller');

// Retorna todos os municipios
// Exemplo: http://localhost:3000/api/municipios/
router.get('/municipios', regioesController.getMunicipios)

// Retorna um municipio pelo id
// Exemplo: http://localhost:3000/api/municipios/001
router.get('/municipios/:id', regioesController.getMunicipioById)

module.exports = router;