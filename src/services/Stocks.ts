import stocksName from "./stocks-name.mock.json";
import { removeLastChar } from "../lib";

const STOCK_IMAGES_URL =
  "https://cdn.toroinvestimentos.com.br/corretora/images/quote";

interface StockInfo {
  ticker: string;
  name: string;
  image: string;
}

const Stocks = {
  getInfo(ticker: string): StockInfo {
    return {
      name: stocksName[ticker],
      ticker,
      image: `${STOCK_IMAGES_URL}/${removeLastChar(ticker)}.svg`
    };
  }
};

export default Stocks;
