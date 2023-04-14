const {app} = require('./app');

(async ()=> {
    const PORT = process.env.PORT || 5000; 
    app.listen(PORT, () => console.log(`server run on port ${PORT}`));
})()
