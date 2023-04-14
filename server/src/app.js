const express = require('express');
const app = express();
const {db} = require('./db');

app.use(express.json());
app.use(express.static('public'));

app.get('/', async (req, res) => { 
    const data = await db.init.findMany();
    res.json({data});
});

app.get('/:val', async (req, res) => {
    const {val} = req.params;
    await db.init.create({data: {val}})
    const data = await db.init.findMany();
    res.json({data});
});

process.on('uncaughtException', err => {
	console.log(err)
    process.exit(1);
});

module.exports = {app};