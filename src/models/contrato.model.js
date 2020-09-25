/**
 * Arquivo: models/contrato.model.js
 * Descrição: arquivo com o modelo do contrato.
 */

module.exports = (sequelize, type) => {
    Contrato = sequelize.define(
        "contrato",
        {
            id_contrato: { 
                type: type.STRING,
                primaryKey: true
            },
            id_licitacao: type.STRING,
            cd_municipio: type.STRING,
            cd_u_gestora: type.INTEGER,
            dt_ano: type.INTEGER,
            nu_contrato: type.STRING,
            dt_assinatura: type.DATE,
            pr_vigencia: type.DATE,
            nu_cpfcnpj: type.STRING,
            nu_licitacao: type.STRING,
            tp_licitacao: type.INTEGER,
            vl_total_contrato: type.INTEGER,
            de_obs: type.STRING,             
            dt_mes_ano: type.STRING,         
            registro_cge: type.STRING,       
            cd_siafi: type.STRING,           
            dt_recebimento: type.DATE,     
            foto: type.STRING,               
            planilha: type.STRING,           
            ordem_servico : type.STRING,
            language : type.STRING,
            de_ugestora : type.STRING,
            no_fornecedor : type.STRING
        },
        {
            freezeTableName: true,
            timestamps: false
        }

    );
    Contrato.associate = function (models) {
        Contrato.hasMany(models.pagamento, {
            foreignKey: "id_contrato",
            sourceKey: "id_contrato",
            as: "pagamentosContrato"
        });

        Contrato.hasMany(models.empenho, {
            foreignKey: "id_contrato",
            sourceKey: "id_contrato",
            as: "empenhosContrato"
        });
    }

    return Contrato;
};