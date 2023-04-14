const express = require('express');
const app = express();
const { Init } = require('./models/Init');

app.use(express.json());
app.use(express.static('public'));

app.get('/', async (req, res) => { 
    const data = await Init.findAll({});
    console.log(data)
    res.json({data});
});

app.get('/:val', async (req, res) => {
    const {val} = req.params;
    await Init.create({ val });
    const data = await Init.findAll({});
    res.json({data});
});

process.on('uncaughtException', err => {
	console.log(err)
    process.exit(1);
});

module.exports = {app};