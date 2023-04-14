require('dotenv').config();  // this line is important!
const config = require('./index');

module.exports = {
    development: {
        username: config.dbUser,
        password: config.dbPassword,
        database: config.dbName,
        host: config.dbHost,
        dialect: "postgres"
    },
    test: {
        username: config.dbUser,
        password: config.dbPassword,
        database: config.dbName,
        host: config.dbHost,
        dialect: "postgres"
    },
    production: {
        username: config.dbUser,
        password: config.dbPassword,
        database: config.dbName,
        host: config.dbHost,
        dialect: "postgres"
    }
}