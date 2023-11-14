const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Conectar-se ao banco de dados MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cadastro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB'));

db.once('open', function () {
  console.log('Conectado ao MongoDB');
});

const usuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  celular: Number,
  endereco: String,
  complemento: String,
  numero: Number,
  bairro: String,
  cidade: String,
  estado: String,
  cep: Number
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Configurar o Express para usar arquivos estáticos
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  // Rota para a página HTML do formulárioZS
  res.sendFile(__dirname + '/cadastro.html');
});

app.post('/cadastro.html', (req, res) => {
  // Rota para lidar com o envio do formulário
  let formData = '';

  req.on('data', (chunk) => {
    formData += chunk;
  });

  req.on('end', () => {
    const parsedData = new URLSearchParams(formData);

    const novoUsuario = new Usuario({
      nome: parsedData.get('firstname'),
      email: parsedData.get('email'),
      senha: parsedData.get('password'),
      celular: parsedData.get('celular'),
      endereco: parsedData.get('endereco'),
      complemento: parsedData.get('complemento'),
      numero: parsedData.get('NumCasa'),
      bairro: parsedData.get('bairro'),
      cidade: parsedData.get('cidade'),
      estado: parsedData.get('estado'),
      cep: parsedData.get("cep")
    });

    novoUsuario
      .save()
      .then(() => {
        console.log('Usuário salvo com sucesso no banco de dados.');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Usuário salvo com sucesso.');
      })
      .catch((err) => {
        console.error('Erro ao salvar o usuário:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro ao salvar o usuário.');
      });
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}/`);
});