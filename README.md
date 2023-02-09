# API de transação bancária

API desenvolvida em [Node.js](https://nodejs.org/en/) com [TypeScript](https://www.typescriptlang.org/) utilizando [Fastify](https://www.fastify.io/) para criar o servidor, [Knex](https://knexjs.org/) como SQL Builder, [Zod](https://zod.dev/) para validação de dados, [SQLite](https://www.sqlite.org/index.html) como banco de dados local e [Postgres](https://www.postgresql.org/) como banco de dados em produção. Está sendo utilizado o [Render](https://render.com/) como CI/CD para subir a aplicação para a [produção](https://fin-api-qgvo.onrender.com/).
<br/>

# A Fazer

- [ ] Gerar documentação das rotas;


# Realizado 

### RF

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter o saldo da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

### RN

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou de débito que subtrairá;
- [x] Deve ser possível identificarmos o usuários entre as requisições;
- [x] O usuário só pode visualizar transações que ele criou;
