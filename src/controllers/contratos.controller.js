/**
 * Arquivo: controllers/contratos.controller.js
 * Descrição: arquivo responsável por recuperar informações relacionadas aos
 * contratos.
 */

const models = require("../models/index.model");
const Contrato = models.contrato;
const Pagamento = models.pagamento;

const Op = models.Sequelize.Op;
const sequelize = models.sequelize_aldb;

const BAD_REQUEST = 400;
const SUCCESS = 200;

// Retorna todas os contratos de um município que possuem ID da licitação
exports.getContratosPorMunicipio = (req, res) => {
    const cd_municipio = req.query.cd_municipio

    Contrato.findAll({
        attributes: ['id_contrato', [sequelize.fn('sum', sequelize.col('pagamento.vl_pagamento')), 'total']],
        include: {
            model: Pagamento,
            as: "pagamentosContrato", 
            attributes: [],
            required: false 
        },
        group: ['contrato.id_contrato'],
        where: {
            cd_municipio: cd_municipio,
            id_licitacao: {
                [Op.ne]: null
            }
        }
    })
        .then(contratos => res.status(SUCCESS).json(contratos))
        .catch(err => res.status(BAD_REQUEST).json({ err }));
};

// Recupera o contrato pelo ID
exports.getContratoById = (req, res) => {
    const id = req.params.id

    Contrato.findOne({
        include: {
            model: Pagamento,
            as: "pagamentosContrato",
            required: false 
        },
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


exports.getContratosVigentes  = (req, res) => {

    Contrato.findAll({
        where: {
            id_licitacao: { [Op.ne]: null },
            where: sequelize.where( sequelize.col('pr_vigencia'), '>=', sequelize.literal('CURRENT_TIMESTAMP'))      
         }
    })
        .then(contratos => res.json(contratos))
        .catch(err => res.status(BAD_REQUEST).json({ err }));
}


exports.getContratosByQuery = (req, res) => {

    const termos = req.query.termo.replace(/[&|!<()\\:',]/gi, '').replace(/\s+/g, ' ').trim().split(' ').join(' & ');

    let query = `SELECT \
        id_contrato, \
             de_obs, \
            de_ugestora, \
            vl_total_contrato, \
            dt_ano \
        FROM \
            ( \
                SELECT \
                *, \
                to_tsvector( \
                    contrato.language::regconfig, \
                    contrato.de_obs \
                ) AS document \
            FROM \
                contrato \
            ) p_search \
        WHERE \
        p_search.document @@to_tsquery('portuguese', '${termos}') \
        ORDER BY \
        ts_rank( \
            p_search.document, \
            to_tsquery('portuguese', '${termos}') \
        ) DESC; `

    sequelize.query(query, {
        model: Contrato,
        mapToModel: true
    }).then(Contrato => res.status(SUCCESS).json(Contrato))
        .catch(err => res.status(BAD_REQUEST).json({ err }));
}
