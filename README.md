# 🦸‍♂️ Be The Hero - Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Knex.js](https://img.shields.io/badge/Knex.js-E16426?style=for-the-badge&logo=knex&logoColor=white)

API RESTful para o projeto "Be The Hero", uma plataforma que conecta ONGs a pessoas dispostas a ajudar em casos específicos. Este backend fornece todos os endpoints necessários para cadastro de ONGs, gerenciamento de casos e comunicação entre doadores e organizações.

## 🚀 Funcionalidades

- **Cadastro de ONGs**: Registro de organizações não-governamentais
- **Autenticação**: Sistema de login para ONGs
- **Gerenciamento de Casos**: Cadastro, listagem, atualização e remoção de casos
- **Contato**: Facilita a comunicação entre doadores e ONGs via WhatsApp e e-mail
- **API RESTful**: Endpoints bem definidos seguindo as melhores práticas REST

## 🛠️ Tecnologias

- **Runtime**: Node.js
- **Framework**: Express.js
- **Banco de Dados**: SQLite3
- **ORM**: Knex.js
- **Outros**: CORS para comunicação cross-origin

## 📋 Pré-requisitos

- Node.js v10+ instalado
- NPM ou Yarn

## 🔧 Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/h4rd1ideveloper/beherobackend.git
   cd beherobackend
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure o banco de dados:
   ```bash
   npx knex migrate:latest
   ```

4. Inicie o servidor:
   ```bash
   npm start
   # ou
   yarn start
   ```

O servidor estará rodando em `http://localhost:3333`.

## 📚 Estrutura da API

### Endpoints de ONGs

#### Cadastro de ONG
```
POST /ongs
```
**Corpo da requisição:**
```json
{
  "name": "APAD",
  "email": "contato@apad.org.br",
  "whatsapp": "4700000000",
  "city": "Rio do Sul",
  "uf": "SC"
}
```
**Resposta:**
```json
{
  "id": "5a3c1d2e"
}
```

#### Login
```
POST /sessions
```
**Corpo da requisição:**
```json
{
  "id": "5a3c1d2e"
}
```
**Resposta:**
```json
{
  "name": "APAD"
}
```

#### Listar ONGs
```
GET /ongs
```
**Resposta:**
```json
[
  {
    "id": "5a3c1d2e",
    "name": "APAD",
    "email": "contato@apad.org.br",
    "whatsapp": "4700000000",
    "city": "Rio do Sul",
    "uf": "SC"
  }
]
```

### Endpoints de Casos

#### Cadastrar Caso
```
POST /incidents
```
**Headers:**
```
Authorization: 5a3c1d2e
```
**Corpo da requisição:**
```json
{
  "title": "Caso 1",
  "description": "Detalhes do caso",
  "value": 120
}
```

#### Listar Casos
```
GET /incidents
```
**Parâmetros de consulta:**
- `page`: Número da página (padrão: 1)

**Resposta:**
```json
[
  {
    "id": 1,
    "title": "Caso 1",
    "description": "Detalhes do caso",
    "value": 120,
    "ong_id": "5a3c1d2e",
    "name": "APAD",
    "email": "contato@apad.org.br",
    "whatsapp": "4700000000",
    "city": "Rio do Sul",
    "uf": "SC"
  }
]
```

#### Listar Casos de uma ONG
```
GET /profile
```
**Headers:**
```
Authorization: 5a3c1d2e
```
**Resposta:**
```json
[
  {
    "id": 1,
    "title": "Caso 1",
    "description": "Detalhes do caso",
    "value": 120,
    "ong_id": "5a3c1d2e"
  }
]
```

#### Deletar Caso
```
DELETE /incidents/:id
```
**Headers:**
```
Authorization: 5a3c1d2e
```

## 🔄 Integração com Frontend

Este backend foi projetado para trabalhar em conjunto com o projeto [BeHeroFrontend](https://github.com/h4rd1ideveloper/beherofrontend), que fornece uma interface de usuário para interagir com esta API.

## 🧪 Testes

Para executar os testes (quando implementados):

```bash
npm test
# ou
yarn test
```

## 📈 Implantação

O projeto está configurado para implantação no Heroku. Para implantar:

1. Crie uma conta no [Heroku](https://heroku.com)
2. Instale o [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
3. Execute os seguintes comandos:

```bash
heroku login
heroku create
git push heroku master
```

## 🔒 Segurança

- A API utiliza IDs aleatórios para ONGs, evitando sequências previsíveis
- Validação de entrada para prevenir injeção de SQL
- Autenticação via cabeçalho para operações sensíveis

## 📄 Licença

Este projeto está licenciado sob a licença ISC - veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

Desenvolvido por [Yan Policarpo](https://github.com/h4rd1ideveloper).

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!
