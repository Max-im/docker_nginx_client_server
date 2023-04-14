const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
	dialect: 'postgres',
	host: config.dbHost,
	port: Number(config.dbPort),
	logging: true
});

module.exports = { sequelize };
