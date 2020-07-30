/**
 * Arquivo: models/index.model.js
 * Descrição: arquivo responsável por importar os modelos com o sequelize.
 */

const Sequelize = require("sequelize");
const { sequelize } = require("../config/db.config");

const LicitacaoModel = "./licitacao.model.js";
const MunicipioModel = "./municipio.model.js";
const ContratoModel = "./contrato.model.js";
const ParticipanteModel = "./participante.model.js"
const PrevisaoModel = "./previsao.model.js"

global.models = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    // Adicione os módulos abaixo
    licitacao: sequelize.import(LicitacaoModel),
    municipio: sequelize.import(MunicipioModel),
    contrato: sequelize.import(ContratoModel),
    participante: sequelize.import(ParticipanteModel),
    previsao: sequelize.import(PrevisaoModel)
};

Object.keys(global.models).forEach(modelName => {
    if (global.models[modelName].associate !== undefined) {
      global.models[modelName].associate(global.models);
    }
  });

module.exports = global.models;