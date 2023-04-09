const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

process.on('uncaughtException', err => {
	console.log(err)
    process.exit(1);
});

module.exports = {app};