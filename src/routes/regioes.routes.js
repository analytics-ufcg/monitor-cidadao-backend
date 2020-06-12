/**
 * Arquivo: src/routes/orgao.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionadas aos estados
 * e municípios do MonitorCidadão
 */

const router = require('express-promise-router')();
const licitacoesController = require('../controllers/regioes.controller');

// Retorna todos os municipios
// Exemplo: http://localhost:3000/api/municipios/
router.get('/municipios', licitacoesController.getMunicipios)

module.exports = router;