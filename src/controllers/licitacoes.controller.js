/**
 * Arquivo: controllers/licitacoes.controller.js
 * Descrição: arquivo responsável por recuperar informações relacionadas as
 * licitações.
 */

const models = require("../models/index.model");
const Licitacao = models.licitacao;
const Op = models.Sequelize.Op;

const BAD_REQUEST = 400;
const SUCCESS = 200;

// Retorna todas as licitações não vazias de um município 
exports.getLicitacoesPorMunicipio = (req, res) => {
    const cd_municipio = req.query.cd_municipio

    Licitacao.findAll({ where: {
        cd_municipio: cd_municipio,
        nu_licitacao: { [Op.ne]: '000000000'} 
    },
   
})
    .then(licitacoes => res.status(SUCCESS).json(licitacoes))
    .catch(err => res.status(BAD_REQUEST).json({ err }));
};

// Recupera a licitação pelo ID
exports.getLicitacaoById = (req, res) => {
    const id = req.params.id

    Licitacao.findOne({
        where: {
            id_licitacao: id,
        }
    })
    .then(licitacoes => res.json(licitacoes))
    .catch(err => res.status(BAD_REQUEST).json({ err }));
}

exports.getLicitacoes = async (req, res) => {
    Licitacao.findAll({where: { 
        de_obs: { [Op.ne]: null },
        nu_licitacao: '000000000' 
    }})
    .then(licitacoes => res.status(SUCCESS).json(licitacoes))
    .catch(err => res.status(BAD_REQUEST).json({ err }));
};
