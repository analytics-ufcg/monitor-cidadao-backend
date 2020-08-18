/**
 * Arquivo: models/previsao.model.js
 * Descrição: arquivo com o modelo da previsao.
 */

module.exports = (sequelize, type) => {
    Previsao = sequelize.define(
        "previsao_prod",
        {
            id_previsao: { 
                type: type.STRING,
                primaryKey: true
            },
            data_previsao: type.DATE,
            id_experimento: type.STRING,
            id_contrato: type.STRING,
            previsao_risco: type.INTEGER
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );

    return Previsao;
};