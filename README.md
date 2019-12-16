[![CircleCI](https://circleci.com/gh/KelvinCS/toro-desafio-frontend/tree/master.svg?style=svg)](https://circleci.com/gh/KelvinCS/toro-desafio-frontend/tree/master)
[![Maintainability](https://api.codeclimate.com/v1/badges/8ecd696ba5ea460cc542/maintainability)](https://codeclimate.com/github/KelvinCS/toro-desafio-frontend/maintainability)
# Resposta ao desafio frontend da Toro

## Dependências

- **npm** ou **yarn**
- **docker**
- **nodejs**


## Como rodar?

O projeto consta de duas partes principais: um container docker contendo a API da aplicação</br>
e o frontend escrito em React. Após instalar as dependências, siga os passos:

- Para rodar a api na porta 8080: `docker run -p 8080:8080 toroinvestimentos/quotesmock`
- Na pasta do projeto rode `yarn install` ou `npm install` para instalar as dependências do front
- Por fim, rode `yarn start` ou `npm run start` para rodar o projeto na porta `3000`

### Testes automatizados

Há dois tipos principais de testes no projeto: testes de unidade e de ui. </br>
Ambos podem ser rodados com os seguintes comandos:

`yarn test` ou `npm run test`

### Storybook

O Storybook é uma ferramenta de documentação, onde consegue se testar visualmente componentes </br>
e seus respectivos estados

- Rode `yarn storybook` na pasta do projeto
