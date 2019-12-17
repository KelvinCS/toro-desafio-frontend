import React, { useState } from "react";
import {
  Content,
  Grid,
  Header,
  ResponsiveRow,
  ToolbarTitle,
  Toolbar,
  ToolbarButtons
} from "./styled";
import RoundButton from "../../components/RoundButton";
import StockCard from "../../components/StockCard";
import { sortStockByPriceDecrease, sortStockByPriceIncrease } from "../../lib";

const identity = (x: any) => x;

const sorters = {
  lowest: {
    key: "lowest",
    fn: sortStockByPriceDecrease
  },
  highest: {
    key: "highest",
    fn: sortStockByPriceIncrease
  },
  default: {
    key: "default",
    fn: identity
  }
};

function useSorter(list, sorter) {
  return sorter.fn(list);
}

export default function StockOptions({ stocks: unsortedStocks }) {
  const [sorter, setSorter] = useState(sorters.default);
  const stocks = useSorter(unsortedStocks, sorter);

  const clickOnSortBy = (key: "lowest" | "highest") => {
    setSorter(sorter.key === key ? sorters.default : sorters[key]);
  };

  return (
    <Content>
      <Toolbar>
        <Header>Explore o mercado</Header>
        <ResponsiveRow>
          <ToolbarTitle>Ordenar:</ToolbarTitle>
          <ToolbarButtons>
            <RoundButton
              disabled={sorter.key !== "highest"}
              onClick={() => clickOnSortBy("highest")}
            >
              Em Alta
            </RoundButton>
            <RoundButton
              disabled={sorter.key !== "lowest"}
              onClick={() => clickOnSortBy("lowest")}
            >
              Em Baixa
            </RoundButton>
          </ToolbarButtons>
        </ResponsiveRow>
      </Toolbar>

      <Grid>
        {stocks.map(({ ticker, name, history, image }) => (
          <StockCard
            key={ticker}
            ticker={ticker}
            name={name}
            history={history}
            logo={image}
          />
        ))}
      </Grid>
    </Content>
  );
}
