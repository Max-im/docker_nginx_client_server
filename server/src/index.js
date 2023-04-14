const {app} = require('./app');
const {sequelize} = require('./db');

(async ()=> {
    const PORT = process.env.PORT || 5000; 
    await sequelize.authenticate();
    app.listen(PORT, () => console.log(`server run on port ${PORT}`));
})()
