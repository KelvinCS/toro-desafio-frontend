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
import { useValues } from "kea";

import stockLogic from "./stocks.logic";

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

export default function StockOptions() {
  const { stocks: unsortedStocks } = useValues(stockLogic);

  const [sorter, setSorter] = useState(sorters.default);

  const clickOnSortBy = (key: "lowest" | "highest") => {
    setSorter(sorter.key === key ? sorters.default : sorters[key]);
  };

  const stocks = useSorter(unsortedStocks, sorter);

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
