const express = require('express');
const cors = require('cors');  // Importa o pacote cors
const app = express();
const port = 3000;

// Habilita o CORS para todas as origens
app.use(cors());  // Isso permite requisições de qualquer origem

// Se quiser restringir para um domínio específico, faça assim:
// app.use(cors({
//   origin: 'http://example.com' // Substitua com o seu domínio
// }));

const datetimeRoute = require('./routes/datetime');
app.use('/api', datetimeRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
