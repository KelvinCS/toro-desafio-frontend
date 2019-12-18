import { useEffect } from "react";
import { useActions } from "kea";
import { API_URL } from "../../config/env";

import stockLogic from "./stocks.logic";

/**
 * Begins a websocket connection to the quotes service,
 * and streams the events to the store
 */
export const useQuoteStreamer = () => {
  const { newQuote, connectionError } = useActions(stockLogic);

  useEffect(() => {
    const socket = new WebSocket(`ws://${API_URL}/quotes`);

    socket.onmessage = ({ data }) => newQuote(JSON.parse(data));
    socket.onerror = connectionError;
    socket.onclose = connectionError;

    return () => socket.close();
  }, []);
};
