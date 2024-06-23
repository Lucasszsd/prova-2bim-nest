<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Test

---

## Metrics for period to: 19:00:40(-0300) (width: 0.026s)

http.codes.404: ................................................................ 1
http.downloaded_bytes: ......................................................... 79
http.request_rate: ............................................................. 1/sec
http.requests: ................................................................. 1
http.response_time:
min: ......................................................................... 4
max: ......................................................................... 4
mean: ........................................................................ 4
median: ...................................................................... 4
p95: ......................................................................... 4
p99: ......................................................................... 4
http.responses: ................................................................ 1
vusers.completed: .............................................................. 1
vusers.created: ................................................................ 1
vusers.created_by_name.Teste de carga de autenticação: ......................... 1
vusers.failed: ................................................................. 0
vusers.session_length:
min: ......................................................................... 26.4
max: ......................................................................... 26.4
mean: ........................................................................ 26.4
median: ...................................................................... 26.3
p95: ......................................................................... 26.3
p99: ......................................................................... 26.3

All VUs finished. Total time: 2 seconds

---

## Summary report @ 19:00:40(-0300)

http.codes.404: ................................................................ 1
http.downloaded_bytes: ......................................................... 79
http.request_rate: ............................................................. 1/sec
http.requests: ................................................................. 1
http.response_time:
min: ......................................................................... 4
max: ......................................................................... 4
mean: ........................................................................ 4
median: ...................................................................... 4
p95: ......................................................................... 4
p99: ......................................................................... 4
http.responses: ................................................................ 1
vusers.completed: .............................................................. 1
vusers.created: ................................................................ 1
vusers.created_by_name.Teste de carga de autenticação: ......................... 1
vusers.failed: ................................................................. 0
vusers.session_length:
min: ......................................................................... 26.4
max: ......................................................................... 26.4
mean: ........................................................................ 26.4
median: ...................................................................... 26.3
p95: ......................................................................... 26.3
p99: ......................................................................... 26.3

##Endpoints
POST /deck
Descrição: Cria um novo baralho.

Corpo da Requisição:

json

{
"name": "string"
}
name (string, obrigatório): Nome do baralho a ser criado.
Resposta de Sucesso:

Código: 201 Created
Exemplo:
json

{
"id": "string",
"name": "string"
}
id (string): Identificador único do baralho criado.
name (string): Nome do baralho.
Resposta de Erro:

Código: 400 Bad Request
Exemplo:
json

{
"message": "string"
}
message (string): Mensagem de erro detalhando o motivo da falha na requisição. 2. GET /deck
Descrição: Retorna todos os baralhos cadastrados.
Resposta de Sucesso:
Código: 200 OK
Exemplo:
json

[
{
"id": "string",
"name": "string"
},
{
"id": "string",
"name": "string"
}
]
id (string): Identificador único do baralho.
name (string): Nome do baralho. 3. GET /deck/
Descrição: Retorna um baralho específico pelo seu identificador.

Parâmetros de URL:

id (string, obrigatório): Identificador único do baralho.
Resposta de Sucesso:

Código: 200 OK
Exemplo:
json

{
"id": "string",
"name": "string"
}
id (string): Identificador único do baralho.
name (string): Nome do baralho.
Resposta de Erro:

Código: 404 Not Found
Exemplo:
json

{
"message": "string"
}
message (string): Mensagem de erro indicando que o baralho com o ID especificado não foi encontrado. 4. PUT /deck/
Descrição: Atualiza um baralho existente pelo seu identificador.

Parâmetros de URL:

id (string, obrigatório): Identificador único do baralho.
Corpo da Requisição:

json

{
"name": "string"
}
name (string, obrigatório): Novo nome para o baralho.
Resposta de Sucesso:

Código: 200 OK
Exemplo:
json

{
"id": "string",
"name": "string"
}
id (string): Identificador único do baralho atualizado.
name (string): Nome atualizado do baralho.
Resposta de Erro:

Código: 404 Not Found
Exemplo:
json

{
"message": "string"
}
message (string): Mensagem de erro indicando que o baralho com o ID especificado não foi encontrado. 5. DELETE /deck/
Descrição: Remove um baralho pelo seu identificador.

Parâmetros de URL:

id (string, obrigatório): Identificador único do baralho.
Resposta de Sucesso:

Código: 200 OK
Exemplo:
json

{
"id": "string",
"name": "string"
}
id (string): Identificador único do baralho removido.
name (string): Nome do baralho removido.
Resposta de Erro:

Código: 404 Not Found
Exemplo:
json

{
"message": "string"
}
message (string): Mensagem de erro indicando que o baralho com o ID especificado não foi encontrado. 6. POST /deck/fetch-and-save-cards
Descrição: Inicia o processo de buscar e salvar cartas de um novo baralho da API externa.

Resposta de Sucesso:

Código: 200 OK
Exemplo:
json

{
"message": "Processo de buscar e salvar cartas iniciado."
}
Resposta de Erro:

Código: 500 Internal Server Error
Exemplo:
json

{
"message": "Erro ao buscar ou salvar as cartas: Detalhes do erro."
}
message (string): Mensagem de erro indicando o motivo da falha ao buscar ou salvar as cartas.
