const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5050;

const corsOptions = {
    origin: '*',
    credentials: true,
  };
 
app.use(cors(corsOptions));

// Rota que retorna um JSON estático
app.get('/fish', (req, res) => {
  const dados = require('./data/fish.json');
  res.json(dados);
});

app.get('/users', (req, res) => {
  const dados = require('./data/users.json');
  res.json(dados);
});

app.get('/me', (req, res) => {
    const dados = require('./data/user.json');
    res.json(dados);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  // Abre no navegador
  const opn = require('opn');
  opn(`http://localhost:${PORT}`);
});
