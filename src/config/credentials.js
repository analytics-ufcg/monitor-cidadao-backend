/**
 * Arquivo: config/credentials.js
 * Descrição: arquivo responsável por recuperar as configurações de
 * cada banco de dados utilizado.
 */

const path = require('path')
// Define o caminho para o .env inicial 
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// configurações dos bancos de dados
module.exports = {
    AL_DB: {
        username: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
        options: {
            trustedConnection: true,
            encrypt: false,
            enableArithAbort: true
        }
    } //, AL_DB {...}
}