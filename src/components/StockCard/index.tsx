import React, { useEffect, useState } from "react";
import {
  Name,
  Container,
  StockInfo,
  Heading,
  Row,
  Price,
  StockHistory,
  Logo
} from "./styled";
import NaturalCurvesChart from "../NaturalCurvesChart";
import { formatCurrency } from "../../lib";
import { colors } from "../../styles/variables";
import Arrow from "./Arrow";

interface Props {
  logo: string;
  name: string;
  ticker: string;
  history: Array<{
    timestamp: number;
    price: number;
  }>;
}

const getPriceColor = (priceGoingUp: boolean) =>
  priceGoingUp ? colors.high : colors.low;

const StockCard = ({ name, history, ticker, logo }: Props) => {
  const [priceGoingUp, setPriceGoingUp] = useState(true);

  const { price } = history.slice(-1)[0];

  useEffect(() => {
    const { price: openingPrice } = history[0];

    if (openingPrice > price) setPriceGoingUp(false);
    if (openingPrice < price) setPriceGoingUp(true);
  }, [price]);

  return (
    <Container>
      <StockInfo>
        <Logo src={logo} />
        <Row>
          <Name>{name}</Name>
          <Name>{ticker}</Name>
        </Row>
        <Heading>Preço do ativo</Heading>
        <Price style={{ color: getPriceColor(priceGoingUp) }}>
          {formatCurrency(price)}
          <Arrow stockGoingUp={priceGoingUp} />
        </Price>
      </StockInfo>
      <StockHistory>
        <NaturalCurvesChart
          data={[
            {
              id: ticker,
              data: history.map(({ timestamp, price }) => ({
                x: timestamp,
                y: price
              }))
            }
          ]}
        />
      </StockHistory>
    </Container>
  );
};

export default StockCard;
