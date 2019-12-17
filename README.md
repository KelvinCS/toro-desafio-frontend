
# Desafio Toro Frontend

  

> Sistema de acompanhamento em tempo real de preço de ações, feito com React + Redux + Docker!

  

## Qual o problema a ser resolvido?

  
Criar o frontend para uma aplicação de cotação de ações em tempo real, com um gráfico demonstrando a evolução do preço ao longo do tempo e outras informações básicas.

## Desafios

  

Embora a aplicação seja simples, alguns detalhes do desafio exigiam
muita tomada de decisão e jogo de cintura.

  

### Como completar os campos faltantes do payload?

  
  A API de testes disponibilizada consiste de um um único *break point*, 
  que é uma conexão *websockets* que retorna a cotação das ações nesse formato:

```json
{
	"<código-do-ativo>":  "<preço-do-ativo>",
	"timestamp" :  "<data-da-movimentação>"
}
```

Por cada movimentação recebida, é preciso atualizar o histórico de preços do ativo e pegar os campos `nome` e `imagem` de um serviço externo, caso necessário.

Para resolver esse problema, a *store* da aplicação foi organizada da seguinte maneira:

- Ao receber um evento pelo *socket* de cotações, é disparada uma ação no redux chamada *NEW_QUOTE*, que carrega como payload a nova cotação;
- Ao receber esse evento, a *saga* de atualização de histórico entra em ação, atrelando a nova cotação ao ticker da ação na store;
- Após isso, o mesmo worker verifica se há dados faltantes para a ação e dispara um novo evento que chama uma saga de atualização;
- A saga de atualização acessa uma API externa para adquirir os dados;

Nesse último passo, acabei optando usar dados mockados. A integração com API's externas funciona bem, mas o modelo de buscar ação por ação tornaria a aplicação pouco escalável. Fora que aplicação atingiu o limite de requests das API's externas bem rápido.

*Todo esse processo pode ser visto em: index.tsx e pages/StockOptions/stocks.logic.ts*

### Como definir se o preço da ação está subindo?

Pode parecer trivial, mas definir se o preço de uma ação está subindo ou descendo depende exclusivamente do ponto de comparação.

Por razões de performance, optei por armazenar uma quantidade limitada de cotações na *store*. Então, para testes, o pregão de uma ação é definido pelas últimas 25 cotações. Sendo a primeira abertura do pregão e última, o fechamento.

Para definir se o preço da ação subiu é preciso apenas calcular se o preço de fechamento é maior do que o da abertura (a mesma lógica se aplica para os *sorters*).


## Como executar a aplicação?

 
 Essa aplicação depende do `docker` para funcionar corretamente, instale-o e tenha certeza de que o `docker-compose` está em suas variáveis de ambiente

#### Iniciando o servidor

Há duas opções para iniciar o servidor: `prod` e `dev`.
Para fins de teste, recomendo que se rode em modo `prod`, a aplicação tem uma melhora significativa de performance

Prod

```

> docker-compose -f docker-compose.prod.yml up app_prod app_backend

```

Dev

```

> docker-compose up app_backend app_dev

```

Nos dois casos, após isso a aplicação estará rodando na porta `3000`

### Testes

  

> O testes unitários e de UI foram feitos usando [Jest](https://jestjs.io/).

  

Para rodar os testes

```

> docker-compose up app_tests

```

### Storybook

Na aplicação utilizei uma ferramenta de documentação e testes chamada `storybook`, ela funciona como um guia visual dos componentes e seus respectivos estados. Ótima para usar em conjunto com um design system

Rodando o storybook

```

> docker-compose up app_storybook

```
