/**
 *          TEMPORÁRIO
 * Arquivo: models/previsao.model.js
 * Descrição: arquivo com o modelo da previsao.
 */

module.exports = (sequelize, type) => {
    Previsao = sequelize.define(
        "previsao",
        {
            id_contrato: { 
                type: type.STRING,
                primaryKey: true
            },
            cd_u_gestora: type.INTEGER,	
            nu_licitacao: type.STRING, 
            nu_contrato: type.STRING,
            dt_ano: type.INTEGER,
            data_inicio: type.DATE,
            nu_cpfcnpj: type.STRING,
            tp_licitacao: type.INTEGER,
            vl_total_contrato: type.INTEGER,
            n_licitacoes_part: type.INTEGER,
            n_licitacoes_venceu: type.INTEGER,
            montante_lic_venceu: type.INTEGER,
            perc_vitoria: type.INTEGER,
            media_n_licitacoes_part: type.INTEGER,
            media_n_licitacoes_venceu: type.INTEGER,
            n_propostas: type.INTEGER,
            media_n_propostas: type.INTEGER,
            total_ganho: type.INTEGER,
            status_tramita: type.INTEGER,
            razao_contrato_por_vl_recebido: type.INTEGER,	
            media_num_contratos: type.INTEGER,
            num_contratos: type.INTEGER,
            vig_pred: type.STRING,
            vig_prob_0: type.INTEGER,
            vig_prob_1: type.INTEGER
        },
        {
            freezeTableName: true,
            timestamps: false
        }

    );
    return Previsao;
};