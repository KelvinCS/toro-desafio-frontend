import { kea } from "kea";
import { put } from "redux-saga/effects";
import StockService from "../../services/Stocks";

interface Quote {
  ticker: string;
  price: number;
  timestamp: number;
}

interface Stock {
  ticker: string;
  name: string;
  image: string;
  history?: { timestamp: number; price: number }[];
}

const stocks = kea({
  actions: () => ({
    newQuote: (rawQuote: any) => rawQuote,
    addNewQuote: (quote: Quote) => quote,
    updateStock: (stock: Stock) => stock,
    retrieveStockInfo: (ticker: string) => ({ ticker }),
    connectionError: payload => payload
  }),

  reducers: ({ actions }) => ({
    connectionError: [
      {},
      {
        [actions.connectionError]: (_, payload) => payload
      }
    ],
    stocksMap: [
      {},
      {
        [actions.addNewQuote]: (state, quote: Quote) => {
          const { ticker, price, timestamp } = quote;
          const stockInfo = state[ticker] || { history: [], ticker };

          return {
            ...state,
            [ticker]: {
              ...stockInfo,
              history: [
                ...stockInfo.history.slice(-25),
                { price: price, timestamp: timestamp }
              ]
            }
          };
        },
        [actions.updateStock]: (state, stock: Stock) => {
          const { ticker } = stock;
          const { history } = state[ticker] || { history: [] };

          return {
            ...state,
            [ticker]: {
              ...stock,
              history
            }
          };
        }
      }
    ]
  }),

  selectors: ({ selectors }) => ({
    stocks: [
      () => [selectors.stocksMap],
      stocksMap => Object.values(stocksMap),
      []
    ]
  }),

  takeEvery: ({ actions, workers }) => ({
    [actions.newQuote]: workers.newQuote,
    [actions.retrieveStockInfo]: workers.retrieveStockInfo
  }),

  workers: {
    *newQuote(action) {
      const { addNewQuote, retrieveStockInfo } = this.actions;

      const { timestamp, ...tickers } = action.payload;
      const [[ticker, price]] = Object.entries(tickers);

      yield put(addNewQuote({ ticker, price, timestamp: Number(timestamp) }));

      if (!this.values.stocksMap[ticker].name) {
        yield put(retrieveStockInfo(ticker));
      }
    },

    *retrieveStockInfo(action) {
      const { updateStock } = this.actions;
      const { ticker } = action.payload;

      yield put(updateStock(StockService.getInfo(ticker)));
    }
  }
});

export default stocks;
