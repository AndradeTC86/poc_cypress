# POC Cypress

# Automação E2E Utilizando o framework Cypress

Esse é um repositório de automação de testes, desenvolvido para trabalhar com o framework Cypress.

## Table of Contents

1. [Objetivo](#objetivo)
2. [Estrutura do projeto](#estrutura-do-projeto)
5. [Setup inicial](#setup-inicial)
6. [Executando Automação](#executando-automação)

## Objetivo

O objetivo desse projeto é criar uma automação do site https://www.saucedemo.com/, utilizando [Cypress](https://www.cypress.io/) como framework de testes em combinação com a linguagem de programação Javascript, com a finalidade de comparar com os frameworks de teste Playwright e Selenium para o Trabalho de Conclusão de Curso da Especialização em Testes Ágeis da faculdade CESAR School.

## Estrutura do projeto

```
|--- cypress
|----- e2e
|----- fixtures
|----- support
|------- page_objects
|------- commands.js
|------- e2e.js
|--- cypress.config.js
|--- package-lock.json
|--- package.json
```

## Executando os testes

### Setup inicial

1. Esse projeto necessita do node.js. Para instalar, execute `npm install node` ou faça o download pelo site [Node](https://nodejs.org/en/download/)
2. Execute o comando `npm install` para instalar as dependências

### Executando Automação

- Execute um dos comandos abaixo para executar os testes.
  Exemplos:
- Para executar todos os testes em formato headless, execute `npm test`
- Para executar todos os testes em modo debug, execute  `npx cypress open`
<p>
