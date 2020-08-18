/**
 * Arquivo: src/routes/previsoes.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionadas as previsões dos contratos.
 */

const router = require('express-promise-router')();
const previsoesController = require('../controllers/previsoes.controller');

// Busca todos as previsões cadastradas
// Exemplo: http://localhost:3000/api/previoes
router.get('/previsoes', previsoesController.getRiscos)

module.exports = router;