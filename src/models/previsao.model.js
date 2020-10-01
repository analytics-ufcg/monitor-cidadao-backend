/**
 * Arquivo: models/previsao.model.js
 * Descrição: arquivo com o modelo da previsao.
 */

module.exports = (sequelize, type) => {
    Previsao = sequelize.define(
        "previsao_prod",
        {
            id_previsao_prod: { 
                type: type.STRING,
                primaryKey: true
            },
            id_contrato: type.STRING,
            id_experimento: type.STRING,
            risco: type.INTEGER,
            timestamp: type.DATE
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );

    return Previsao;
};