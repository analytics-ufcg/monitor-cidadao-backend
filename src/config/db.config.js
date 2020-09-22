/**
 * Arquivo: config/db.config.js
 * Descrição: arquivo responsável por criar a conexão com o banco de dados.
 */

const { Sequelize } = require('sequelize');
const { AL_DB } = require("./credentials");
const { MC_DB } = require("./credentials");

/**  Adiciona as configurações específicas de um banco. Caso seja necessário mudar
 o BD basta alterar o parâmetro do Sequelize.
*/
const sequelize_aldb = new Sequelize(AL_DB)
const sequelize_mcdb = new Sequelize(MC_DB)


run(sequelize_aldb, AL_DB).catch(error => console.log(error.stack));
run(sequelize_mcdb, MC_DB).catch(error => console.log(error.stack));

// Testa se a conexão foi estabelecida
async function run(conexao, config) {
  try {
    await conexao.authenticate();
    console.log('Conexão estabelecida com o banco de dados ', config.database);
  } catch (error) {
    console.error('Não foi possível conectar-se ao banco de dados:', error);
  }
}

module.exports = {
  sequelize_aldb, sequelize_mcdb
}







