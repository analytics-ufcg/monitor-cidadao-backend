/**
 * Arquivo: models/index.model.js
 * Descrição: arquivo com o modelo da licitacao.
 */

module.exports = (sequelize, type) => {
    Licitacao = sequelize.define(
        "licitacao",
        {
            id_licitacao: { 
                type: type.STRING,
                primaryKey: true
            },
            cd_municipio: type.INTEGER,
            cd_u_gestora: type.INTEGER,
            dt_ano: type.INTEGER,
            nu_licitacao: type.STRING,
            tp_licitacao: type.INTEGER,
            dt_homologacao: type.DATE,
            nu_propostas: type.INTEGER,
            vl_licitacao: type.INTEGER,
            tp_objeto: type.INTEGER,
            de_obs: type.STRING,
            dt_mes_ano: type.STRING,
            registro_cge: type.STRING,
            tp_regime_execucao: type.INTEGER
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );
    return Licitacao;
};