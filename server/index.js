const keys = require('./keys');
const express = require('express');
const cors = require('cors');
const { client } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  app.get('/', async (req, res) => {
    const data = await client.item.findMany({});
    res.send({ data });
  });

  app.get('/:title', async (req, res) => {
    const { title } = req.params;
    await client.item.create({ data: { title } });
    const data = await client.item.findMany({});
    res.send({ data });
  });

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`server run on ${port}`));
})();
