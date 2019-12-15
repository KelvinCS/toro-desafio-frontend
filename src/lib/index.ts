interface Stock {
  history: Array<{ timestamp: number; price: number }>;
}

/**
 * Formats a number to the brazilian currency
 * @param value
 * @example
 * formatCurrency(14.30)
 * @returns "R$ 14,30"
 */
export const formatCurrency = (value: number): string => {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
};

/**
 * Remove the last char of a given string
 * @param value
 * @example removeLastChar("Test")
 * @returns "Tes"
 */
export const removeLastChar = (value: string) => value.slice(0, -1);

/**
 * Calculate de difference between the opening price and the closing price
 * of the stock, given the history range
 * @param stock object stock containing the price history
 */
const calcStockPriceIncrease = (stock: Stock) => {
  const { price: openingPrice } = stock.history[0];
  const { price: lastPrice } = stock.history.slice(-1)[0];

  return lastPrice - openingPrice;
};

/**
 * Sorts a list of stocks based on the price increase
 * @param stocks Array of stocks
 */
export const sortStockByPriceIncrease = (stocks: Stock[]) => {
  return stocks.sort(
    (stockA, stockB) =>
      calcStockPriceIncrease(stockB) - calcStockPriceIncrease(stockA)
  );
};

/**
 * Sorts a list of stocks based on the price decrease
 * @param stocks Array of stocks
 */
export const sortStockByPriceDecrease = (stocks: Stock[]) => {
  return stocks.sort(
    (stockA, stockB) =>
      calcStockPriceIncrease(stockA) - calcStockPriceIncrease(stockB)
  );
};
