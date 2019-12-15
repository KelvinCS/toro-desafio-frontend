import StocksNameMock from "./stocks-name.mock.json";

const stocksName: any = StocksNameMock;
const STOCK_IMAGES_URL =
  "https://cdn.toroinvestimentos.com.br/corretora/images/quote";

interface StockInfo {
  ticker: string;
  name: string;
  image: string;
  history: [];
}

const Stocks = {
  getInfo(ticker: string): StockInfo {
    return {
      name: stocksName[ticker],
      ticker,
      image: `${STOCK_IMAGES_URL}/${ticker.slice(0, -1)}.svg`,
      history: []
    };
  }
};

export default Stocks;
