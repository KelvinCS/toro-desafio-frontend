import React from "react";
import { useValues } from "kea";
import StockList from "../../containers/StockList";
import { useQuoteStreamer } from "./hooks";

import stockLogic from "./stocks.logic";

export default function StockOptions() {
  const { stocks } = useValues(stockLogic);

  useQuoteStreamer();

  return <StockList stocks={stocks} />;
}
