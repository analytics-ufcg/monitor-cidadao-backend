/**
 * Arquivo: controllers/contratos.controller.js
 * Descrição: arquivo responsável por recuperar informações relacionadas aos
 * contratos.
 */

const models = require("../models/index.model");
const Contrato = models.contrato;
const Pagamento = models.pagamento;
const Empenho = models.empenho;

const Op = models.Sequelize.Op;
const sequelize = models.sequelize_aldb;

const BAD_REQUEST = 400;
const SUCCESS = 200;

// Retorna todas os contratos de um município que possuem ID da licitação
exports.getContratosPorMunicipio = (req, res) => {
    const cd_ibge = req.query.cd_ibge

    Contrato.findAll({
        attributes: {
            include: [[sequelize.fn('SUM', sequelize.col('pagamentosContrato.vl_pagamento')), 'totalPago']]
        },
        include: {
            model: Pagamento,
            attributes: [],
            as: "pagamentosContrato", 
            required: false 
        },
        group: ['contrato.id_contrato'],
        where: {
            cd_ibge: cd_ibge,
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
        include: [{
            model: Pagamento,
            attributes: ['dt_pagamento', 'vl_pagamento'],
            as: "pagamentosContrato",
            required: false 
        },
        {
            model: Empenho,
            attributes: ['dt_empenho','vl_empenho'],
            as: "empenhosContrato",
            required: false 
        },
    ],
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
            dt_ano, \
            nu_licitacao, \
            nu_contrato  \
        FROM \
            ( \
                SELECT \
                *, \
                to_tsvector( \
                    contrato.language::regconfig, \
                    contrato.de_obs \
                ) ||
                to_tsvector( \
                    contrato.nu_licitacao \
                ) ||
                to_tsvector( \
                    contrato.nu_contrato \
                )   AS document \
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
