const { Sequelize } = require('sequelize');

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

console.log("==========================")
console.log(dbName, dbUser, dbPassword)
console.log("==========================")

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
	dialect: 'postgres',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	logging: true
});

export { sequelize };
