/**
 * Arquivo: models/index.model.js
 * Descrição: arquivo responsável por importar os modelos com o sequelize.
 */

const Sequelize = require("sequelize");
const { sequelize_aldb } = require("../config/db.config");
const { sequelize_mcdb } = require("../config/db.config");

const LicitacaoModel = "./licitacao.model.js";
const MunicipioModel = "./municipio.model.js";
const ContratoModel = "./contrato.model.js";
const ParticipanteModel = "./participante.model.js";
const PagamentoModel = "./pagamento.model.js";

const PrevisaoModel = "./previsao.model.js";

global.models = {
    Sequelize: Sequelize,
    sequelize_aldb: sequelize_aldb,
    sequelize_mcdb: sequelize_mcdb,

    // Adicione os módulos do AL_DB abaixo
    licitacao: sequelize_aldb.import(LicitacaoModel),
    municipio: sequelize_aldb.import(MunicipioModel),
    contrato: sequelize_aldb.import(ContratoModel),
    participante: sequelize_aldb.import(ParticipanteModel),
    pagamento: sequelize_aldb.import(PagamentoModel),

    // Adicione os módulos do MC_DB abaixo
    previsao: sequelize_mcdb.import(PrevisaoModel),
};

Object.keys(global.models).forEach(modelName => {
    if (global.models[modelName].associate !== undefined) {
      global.models[modelName].associate(global.models);
    }
  });

module.exports = global.models;