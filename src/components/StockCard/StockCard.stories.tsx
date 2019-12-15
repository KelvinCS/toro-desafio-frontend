import React from "react";
import StockCard from "./index";

export default { title: "StockCard" };

export const low = () => (
  <StockCard
    history={[
      { price: 10, timestamp: 10 },
      { price: 5, timestamp: 11 },
      { price: 7, timestamp: 12 }
    ]}
    logo={`https://cdn.toroinvestimentos.com.br/corretora/images/quote/PETR.svg`}
    name="Pretrobras SA"
    ticker="PETR4"
  />
);

export const high = () => (
  <StockCard
    history={[
      { price: 5, timestamp: 11 },

      { price: 10, timestamp: 10 },
      { price: 7, timestamp: 12 }
    ]}
    logo={`https://cdn.toroinvestimentos.com.br/corretora/images/quote/PETR.svg`}
    name="Pretrobras SA"
    ticker="PETR4"
  />
);
