/**
 * Arquivo: models/index.model.js
 * Descrição: arquivo responsável por importar os modelos com o sequelize.
 */

const Sequelize = require("sequelize");
const { sequelize } = require("../config/db.config");

const LicitacaoModel = "./licitacao.model.js";
const MunicipioModel = "./municipio.model.js";

global.models = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    // Adicione os módulos abaixo
    licitacao: sequelize.import(LicitacaoModel),
    municipio: sequelize.import(MunicipioModel),
};

module.exports = global.models;