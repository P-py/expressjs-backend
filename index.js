const express = require('express');
const app = express();
const port = 3000;

// Importa a rota
const datetimeRoute = require('./routes/datetime');

// Usa a rota
app.use('/api', datetimeRoute);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
