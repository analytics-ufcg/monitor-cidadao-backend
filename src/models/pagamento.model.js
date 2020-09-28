/**
 * Arquivo: models/pagamento.model.js
 * Descrição: arquivo com o modelo do pagamento.
 */

module.exports = (sequelize, type) => {
    Pagamento = sequelize.define(
        "pagamento",
        {
            id_pagamento: { 
                type: type.STRING,
                primaryKey: true
            },
            id_empenho: type.STRING,
            id_licitacao: type.STRING,
            id_contrato: type.STRING,
            cd_u_gestora: type.INTEGER,
            dt_ano: type.INTEGER,
            cd_unid_orcamentaria: type.STRING,
            nu_empenho: type.STRING,
            nu_parcela: type.STRING,
            tp_lancamento: type.STRING,
            vl_pagamento: type.INTEGER,
            dt_pagamento: type.DATE,
            cd_conta: type.STRING,
            nu_cheque_pag: type.STRING,
            nu_deb_aut: type.STRING,
            cd_banco_rec: type.STRING,
            cd_agencia_rec: type.STRING,
            nu_conta_rec: type.STRING,
            tp_fonte_recursos: type.STRING,
            dt_mes_ano: type.STRING,
            cd_banco: type.STRING,
            cd_agencia: type.STRING,
            tp_conta_bancaria: type.STRING,
        },
        {
            freezeTableName: true,
            timestamps: false
        }

    );
    return Pagamento;
};