import { formatCurrency, removeLastChar } from "./index";

test("format currency to brazilian reals", () => {
  expect(formatCurrency(14.3)).toBe("R$ 14,30");
});

test("remove last char from a string", () => {
  expect(removeLastChar("Teste")).toBe("Test");
});
