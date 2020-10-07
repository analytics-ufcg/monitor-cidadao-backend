/**
 * Arquivo: models/regiao_ibge.model.js
 * Descrição: arquivo com o modelo dos codigos das localidades disponibilizadas pelo IBGE.
 */

module.exports = (sequelize, type) => {
    RegiaoIBGE = sequelize.define(
        "localidade_ibge",
        {
            cd_ibge: { 
                type: type.STRING,
                primaryKey: true
            },
            uf : type.STRING,
            nome_uf : type.STRING,
            mesorregiao_geografica : type.STRING,
            nome_mesorregiao : type.STRING,
            microrregiao_geografica : type.STRING,
            nome_microrregiao : type.STRING,
            municipio : type.STRING,
            nome_municipio : type.STRING

        },
        {
            freezeTableName: true,
            timestamps: false
        }
    );

    return RegiaoIBGE;
};