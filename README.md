# Resposta ao desafio frontend da Toro

## Dependências

- **npm** ou **yarn**
- **docker**
- **nodejs**


## Como rodar?

> O projeto consta de duas partes principais: um container docker contendo a API da aplicação
> e o frontend escrito em React. Após instalar as dependências, siga os passos:

- Para rodar a api na porta 8080: `docker run -p 8080:8080 toroinvestimentos/quotesmock`
- Na pasta do projeto rode `yarn install` ou `npm install` para instalar as dependências do front
- Por fim, rode `yarn start` ou `npm run start` para rodar o projeto na porta `3000`

### Testes automatizados

Há dois tipos principais de testes no projeto: testes de unidade e de ui. 
Ambos podem ser rodados com os seguintes comandos:

`yarn test` ou `npm run test`
