export const formatCurrency = (value: number): string => {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
};

export const removeLastChar = (value: string) => value.slice(0, -1);

const calcStockPriceIncrease = (stock: any) => {
  const { price: openingPrice } = stock.history[0];
  const { price: lastPrice } = stock.history.slice(-1)[0];

  return lastPrice - openingPrice;
};

export const sortStockByPriceIncrease = (stocks: any[]) => {
  return stocks.sort(
    (stockA, stockB) =>
      calcStockPriceIncrease(stockB) - calcStockPriceIncrease(stockA)
  );
};

export const sortStockByPriceDecrease = (stocks: any[]) => {
  return stocks.sort(
    (stockA, stockB) =>
      calcStockPriceIncrease(stockA) - calcStockPriceIncrease(stockB)
  );
};
