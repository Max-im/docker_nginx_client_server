const {app} = require('./app');
// const {sequelize} = require('./db');
const { Pool } = require('pg');


(async ()=> {
    // await sequelize.authenticate();
    const pgClient = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    });

    pgClient
    .query('CREATE TABLE IF NOT EXISTS aaa(number INT)')
    .catch((err) => console.error('not create table: ' + err));


    app.listen(5000, () => console.log('app run'));
})()
