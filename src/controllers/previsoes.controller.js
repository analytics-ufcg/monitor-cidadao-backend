/**
 * Arquivo: controllers/previsao.controller.js
 * Descrição: arquivo responsável por recuperar informações relacionadas as previsoes contratuais.
 */

const models = require("../models/index.model");
const { previsao } = require("../models/index.model");
const Previsao = models.previsao;

const sequelize = models.sequelize_mcdb;

const BAD_REQUEST = 400;
const SUCCESS = 200;

// Retorna todos os riscos calculados
exports.getRiscos = (req, res) => {

    Previsao.findAll()
    .then(previsao => res.status(SUCCESS).json(previsao))
    .catch(err => res.status(BAD_REQUEST).json({ err }));
};
