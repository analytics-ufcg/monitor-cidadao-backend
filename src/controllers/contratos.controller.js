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

// Retorna todas os contratos de um município 
exports.getContratosPorMunicipio = (req, res) => {
    const cd_municipio = req.query.cd_municipio

    Contrato.findAll({
        where: {
            cd_municipio: cd_municipio
        }
    })
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

exports.getContratosByQuery = (req, res) => {
    let query = 'SELECT \
        id_contrato, \
            de_obs \
        FROM \
            ( \
                SELECT \
                *, \
                to_tsvector( \
                    contrato.language:: regconfig, \
                    contrato.de_obs \
                ) AS document \
            FROM \
                contrato \
            ) p_search \
        WHERE \
        p_search.document @@to_tsquery("portuguese", "hospital") \
        ORDER BY \
        ts_rank( \
            p_search.document, \
            to_tsquery("portuguese", "hospital") \
        ) DESC; '

    models.sequelize.query(query, {
        model: Contrato,
        mapToModel: true
    }).then(Contrato => res.status(SUCCESS).json(Contrato))
        .catch(err => res.status(BAD_REQUEST).json({ err }));
}