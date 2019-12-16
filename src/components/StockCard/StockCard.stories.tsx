import React from "react";
import StockCard from "./index";

export default { title: "StockCard" };

const history = [
  { price: 5, timestamp: 11 },
  { price: 10, timestamp: 10 },
  { price: 7, timestamp: 12 }
];

export const low = () => (
  <StockCard
    history={history}
    logo={`https://cdn.toroinvestimentos.com.br/corretora/images/quote/PETR.svg`}
    name="Pretrobras SA"
    ticker="PETR4"
  />
);

export const high = () => (
  <StockCard
    history={history.reverse()}
    logo={`https://cdn.toroinvestimentos.com.br/corretora/images/quote/PETR.svg`}
    name="Pretrobras SA"
    ticker="PETR4"
  />
);
