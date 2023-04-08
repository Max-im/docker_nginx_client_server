const os = require('os');
const express = require('express');
const app = express();
const redis = require('redis');
const redisClient = redis.createClient({
  host: 'redis',
  port: 6379
});

app.get('/', function(req, res) {
    res.json({hello: 'world'});
});

app.listen(5000, () => console.log('app run '));
