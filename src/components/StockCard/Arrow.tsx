import React from "react";
import { ReactComponent as ArrowUpIcon } from "../../assets/img/arrow-up.svg";
import styled from "styled-components";
import { colors } from "../../styles/variables";

interface Props {
  stockGoingUp: boolean;
}

const ArrowIcon = styled(ArrowUpIcon)`
  height: 1rem;
  margin: 0 8px;
`;

export default function Arrow({ stockGoingUp }: Props) {
  const modifier = stockGoingUp
    ? {
        fill: colors.high
      }
    : {
        fill: colors.low,
        transform: "rotate(180deg)"
      };

  return <ArrowIcon style={modifier}></ArrowIcon>;
}
