import {
  formatCurrency,
  removeLastChar,
  calcStockPriceIncrease,
  sortStockByPriceDecrease,
  sortStockByPriceIncrease
} from "./index";

const stock = {
  history: [
    {
      timestamp: 1,
      price: 10
    },
    {
      timestamp: 2,
      price: 5
    }
  ]
};

test("format currency to brazilian reals", () => {
  expect(formatCurrency(14.3)).toBe("R$ 14,30");
});

test("remove last char from a string", () => {
  expect(removeLastChar("Teste")).toBe("Test");
});

test("calc stock price increase", () => {
  expect(calcStockPriceIncrease(stock)).toBe(5 - 10);
});
