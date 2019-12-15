export const formatCurrency = (value: number): string => {
  return `R$ ${value.toString().replace(".", ",")}`;
};

export const removeLastChar = (value: string) => value.slice(0, -1);
