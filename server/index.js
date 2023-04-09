const {app} = require('./app');
const {sequelize} = require('./db');
// const { Pool } = require('pg');


(async ()=> {
    sequelize.authenticate()
    .then(() => {
        app.listen(5000, () => console.log('app run'));
    })
    .catch(err) {
        console.log('=====================')
        console.log(err)
        console.log('=====================')
    }
    // const pgClient = new Pool({
    //     user: process.env.DB_USER,
    //     host: process.env.DB_HOST,
    //     database: process.env.DB_NAME,
    //     password: process.env.DB_PASSWORD,
    //     port: process.env.DB_PORT,
    // });

    // pgClient
    // .query('CREATE TABLE IF NOT EXISTS aaa(number INT)')
    // .catch((err) => console.error('not create table: ' + err));


})()
