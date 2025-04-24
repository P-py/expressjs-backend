# 🌐 API de Data e Hora com Express.js

Uma API simples construída com **Express.js** que retorna a **data e hora atual**, formatadas de acordo com a **localidade informada** via URL. Ideal para fins educativos, testes de integração ou como base para APIs maiores.


## 📦 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

## 🚀 Instalação e execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/expressjs-datetime-api.git
cd expressjs-datetime-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
node index.js
```

O servidor estará rodando em: [http://localhost:3000](http://localhost:3000)

## 📌 Endpoints

### `GET /api/datetime/:locale`

Retorna a data e hora atual, formatadas de acordo com o código de localidade (`locale`) fornecido.

#### 🔧 Parâmetros de rota

| Parâmetro | Tipo     | Obrigatório | Descrição                                      |
|-----------|----------|-------------|------------------------------------------------|
| locale    | `string` | Sim         | Código da localidade. Ex: `pt-BR`, `en-US`... |

#### 🧪 Exemplo de requisição

```
GET http://localhost:3000/api/datetime/pt-BR
```

#### ✅ Exemplo de resposta

```json
{
  "locale": "pt-BR",
  "data": "24/04/2025",
  "hora": "14:52:03",
  "iso": "2025-04-24T17:52:03.123Z"
}
```

#### ⚠️ Exemplo de erro para localidade inválida

```json
{
  "erro": "Formato de localidade inválido",
  "exemplo": "Use algo como \"pt-BR\", \"en-US\", \"ja-JP\", etc."
}
```

---

## 🗂️ Estrutura do projeto

```
expressjs-datetime-api/
├── index.js              # Arquivo principal da aplicação
├── package.json          # Configuração do Node.js
└── routes/
    └── datetime.js       # Rota responsável por data e hora
```