const os = require('os');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.json({hello: 'world'});
});

app.listen(5000, () => console.log('app run '));
