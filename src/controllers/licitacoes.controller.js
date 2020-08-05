/**
 * Arquivo: controllers/licitacoes.controller.js
 * Descrição: arquivo responsável por recuperar informações relacionadas as
 * licitações.
 */

const models = require("../models/index.model");
const Contrato = models.contrato;
const Licitacao = models.licitacao;
const Participante = models.participante;
const Previsao = models.previsao;

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
        include: [
            {
                model: Contrato,
                as: "contratosLicitacao",
                include: [
                    {
                        model: Previsao,
                        as: "previsaoContrato"
                    }
                ]
            },
            {
                model: Participante,
                as: "participantesLicitacao",
                where: {
                    nu_cpfcnpj: { [Op.ne]: '00000000000000'}
                }
            }
        ],
        where: {
            id_licitacao: id,
        }
    })
    .then(licitacoes => res.json(licitacoes))
    .catch(err => res.status(BAD_REQUEST).json({ err }));
}
