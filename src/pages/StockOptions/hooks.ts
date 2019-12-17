import { useEffect } from "react";
import { useActions } from "kea";

import stockLogic from "./stocks.logic";

/**
 * Begins a websocket connection to the quotes service,
 * and streams the events to the store
 */
export const useQuoteStreamer = () => {
  const { newQuote, connectionError } = useActions(stockLogic);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/quotes");

    socket.onmessage = ({ data }) => newQuote(JSON.parse(data));
    socket.onerror = connectionError;

    return () => socket.close();
  }, []);
};
