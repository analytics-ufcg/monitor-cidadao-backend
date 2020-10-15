/**
 * Arquivo: src/routes/licitacoes.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionadas a classe 'Licitacoes'.
 */

const router = require('express-promise-router')();
const licitacoesController = require('../controllers/licitacoes.controller');

// Retorna todas as licitacoes de um município
// Exemplo: http://localhost:3000/api/licitacoes/municipio?cd_ibge=2501807
router.get('/licitacoes/municipio', licitacoesController.getLicitacoesPorMunicipio)

// Busca a licitação pelo seu ID
// Exemplo: http://localhost:3000/api/licitacoes/03f8384d87a7f7c7c8eea7670366d670
router.get('/licitacoes/:id', licitacoesController.getLicitacaoById)

module.exports = router;