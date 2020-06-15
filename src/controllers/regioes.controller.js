/**
 * Arquivo: controllers/regioes.controller.js
 * Descrição: arquivo responsável por recuperar informações relacionadas as
 * regiões (estados e municipios).
 */

const models = require("../models/index.model");
const Municipio = models.municipio;

const BAD_REQUEST = 400;
const SUCCESS = 200;

// Retorna as 10 primeiras licitações (terá mudanças)
exports.getMunicipios = async (req, res) => {
    Municipio.findAll()
    .then(municipios => res.status(SUCCESS).json(municipios))
    .catch(err => res.status(BAD_REQUEST).json({ err }));
};
