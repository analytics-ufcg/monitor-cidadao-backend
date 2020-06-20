/**
 * Arquivo: models/municipio.model.js
 * Descrição: arquivo com o modelo do muncipio.
 */

module.exports = (sequelize, type) => {
    Municipio = sequelize.define(
        "municipio",
        {
            cd_municipio: { 
                type: type.STRING,
                primaryKey: true
            },
            cd_ibge: type.INTEGER,
            no_municipio: type.STRING,
            dt_ano_criacao: type.DATE,
            cd_regiao_administrativa: type.STRING,
            cd_micro_regiao: type.STRING,
            cd_meso_regiao: type.STRING

        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );

    return Municipio;
};