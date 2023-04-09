const {app} = require('./app');
const {sequelize} = require('./db');

(async ()=> {
    await sequelize.authenticate();
    app.listen(5000, () => console.log('app run'));
})()
