const {readdirSync, readFileSync} = require('fs');
const express = require('express');
const app = express();
app.use(express.static('.'));
app.listen(1337);

app.get('/card', (req, res) => {
  const text = readdirSync('./cards').map(x => readFileSync(`./cards/${x}`, 'utf8'));
  console.log(text);
  res.send(JSON.stringify(text));
});

