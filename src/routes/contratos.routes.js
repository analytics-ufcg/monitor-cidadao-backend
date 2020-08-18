/**
 * Arquivo: src/routes/contratos.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionadas a classe 'Contratos'.
 */

const router = require('express-promise-router')();
const contratosController = require('../controllers/contratos.controller');

// Busca todos os contratos de um município
// Exemplo: http://localhost:3000/api/contratos/municipio?cd_municipio=012
router.get('/contratos/municipio', contratosController.getContratosPorMunicipio)

// Busca um contrato pelo seu ID
// Exemplo: http://localhost:3000/api/contratos/e233520a006288d0caaf70f5bea2f64b
router.get('/contratos/:id', contratosController.getContratoById)

// Busca todos os contratos de uma licitação
// Exemplo: http://localhost:3000/api/licitacoes/b06aa4ae558ddaaaeecac2ca4aa2e186/contratos
router.get('/licitacoes/:id_licitacao/contratos', contratosController.getContratosByLicitacao)

router.get('/search', contratosController.getContratosByQuery)



module.exports = router;