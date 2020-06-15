/**
 * Arquivo: models/municipio.model.js
 * Descrição: arquivo com o modelo do muncipio.
 */

module.exports = (sequelize, type) => {
    Municipio = sequelize.define(
        "Codigo_Municipios",
        {
            cd_Municipio: { 
                type: type.STRING,
                primaryKey: true
            },
            cd_Ibge: type.STRING,
            no_Municipio: type.STRING,
        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );

    return Municipio;
};