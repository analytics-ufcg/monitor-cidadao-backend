/**
 * Arquivo: models/contrato.model.js
 * Descrição: arquivo com o modelo do participante.
 */

module.exports = (sequelize, type) => {
    Participante = sequelize.define(
        "participante",
        {
            id_participante: { 
                type: type.STRING,
                primaryKey: true
            },
            id_licitacao: type.STRING,
            cd_u_gestora: type.INTEGER,
            dt_ano: type.INTEGER,
            nu_licitacao: type.STRING,
            tp_licitacao: type.INTEGER,
            nu_cpfcnpj: type.STRING,
            dt_mes_ano: type.STRING,         
            no_fornecedor : type.STRING
        },
        {
            freezeTableName: true,
            timestamps: false
        }

    );
    return Participante;
};