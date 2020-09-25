/**
 * Arquivo: models/empenho.model.js
 * Descrição: arquivo com o modelo de empenho.
 */

module.exports = (sequelize, type) => {
    Empenho = sequelize.define(
        "empenho",
        {
            id_empenho: { 
                type: type.STRING,
                primaryKey: true
            },
            id_licitacao: type.STRING,
            id_contrato: type.STRING,
            cd_municipio: type.STRING,
            cd_u_gestora: type.INTEGER,
            dt_ano: type.INTEGER,
            cd_unid_orcamentaria: type.STRING,
            cd_funcao: type.STRING,
            cd_subfuncao: type.STRING,
            cd_programa: type.STRING,
            cd_acao: type.STRING,
            cd_classificacao: type.STRING,
            cd_cat_economica: type.STRING,
            cd_nat_despesa: type.STRING,
            cd_modalidade: type.STRING,
            cd_elemento: type.STRING,
            cd_sub_elemento: type.STRING,
            tp_licitacao: type.STRING,
            nu_licitacao: type.STRING,
            nu_empenho: type.STRING,
            tp_empenho: type.STRING,
            dt_empenho: type.STRING,
            vl_empenho: type.INTEGER,
            cd_credor: type.STRING,
            no_credor: type.STRING,
            tp_credor: type.STRING,
            de_historico1: type.STRING,
            de_historico2: type.STRING,
            de_historico: type.STRING,
            tp_meta: type.STRING,
            nu_obra: type.STRING,
            dt_mes_ano: type.STRING,
            dt_mes_ano_referencia: type.STRING,
            tp_fonte_recursos: type.STRING,
            nu_cpf: type.STRING,
            cd_sub_elemento_2: type.STRING
        },
        {
            freezeTableName: true,
            timestamps: false
        }

    );
    return Empenho;
};