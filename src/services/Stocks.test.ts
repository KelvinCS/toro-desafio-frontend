import Stocks from "./Stocks";

test("return informations in the proper way", () => {
  expect(Stocks.getInfo("PETR4")).toMatchObject({
    name: /String/,
    ticker: "PETR4",
    image: /String/
  });
});
