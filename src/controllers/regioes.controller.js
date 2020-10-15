/**
 * Arquivo: controllers/regioes.controller.js
 * Descrição: arquivo responsável por recuperar informações relacionadas as
 * regiões (estados e municipios).
 */

const models = require("../models/index.model");
const RegiaoIBGE = models.regiaoIBGE;

const BAD_REQUEST = 400;
const SUCCESS = 200;

const Op = models.Sequelize.Op;

// Retorna as 10 primeiras licitações (terá mudanças)
exports.getMunicipios = async (req, res) => {
    RegiaoIBGE.findAll({
        where: {
            uf: {
                [Op.or]: ["25", "43"]
            }
        }
    })
        .then(municipios => res.status(SUCCESS).json(municipios))
        .catch(err => res.status(BAD_REQUEST).json({ err }));
};

// Recupera o município pelo ID
exports.getMunicipioById = (req, res) => {
    const id = req.params.id

    RegiaoIBGE.findOne({
        where: {
            cd_ibge: id
        }
    })
        .then(municipios => res.json(municipios))
        .catch(err => res.status(BAD_REQUEST).json({ err }));
}