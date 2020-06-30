/**
 * Arquivo: controllers/contratos.controller.js
 * Descrição: arquivo responsável por recuperar informações relacionadas aos
 * contratos.
 */

const models = require("../models/index.model");
const Contrato = models.contrato;
const Op = models.Sequelize.Op;

const BAD_REQUEST = 400;
const SUCCESS = 200;

// Retorna todas os contratos de um município que possuem ID da licitação 
exports.getContratosPorMunicipio = (req, res) => {
    const cd_municipio = req.query.cd_municipio
    
    Contrato.findAll({ where: {
        cd_municipio: cd_municipio,
        id_licitacao: { [Op.ne]: null}
    }})
    .then(contratos => res.status(SUCCESS).json(contratos))
    .catch(err => res.status(BAD_REQUEST).json({ err }));
};

// Recupera o contrato pelo ID
exports.getContratoById = (req, res) => {
    const id = req.params.id

    Contrato.findOne({
        where: {
            id_contrato: id
        }
    })
    .then(contratos => res.json(contratos))
    .catch(err => res.status(BAD_REQUEST).json({ err }));
}

// Recupera todos os contratos de uma licitação
exports.getContratosByLicitacao = (req, res) => {
    const id_licitacao = req.params.id_licitacao

    Contrato.findAll({
        where: {
            id_licitacao: id_licitacao
        }
    })
    .then(contratos => res.json(contratos))
    .catch(err => res.status(BAD_REQUEST).json({ err }));
}