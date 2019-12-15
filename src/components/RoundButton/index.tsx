import React from "react";
import { Button } from "./styled";
import { colors } from "../../styles/variables";

interface Props {
  disabled?: boolean;
  children?: React.Component | string;
  onClick?: () => void;
}

export default function RoundButton({ disabled, children, ...props }: Props) {
  const modifier = disabled
    ? {
        backgroundColor: colors.gray,
        color: colors.grayDark
      }
    : {};

  return (
    <Button {...props} style={modifier}>
      {children}
    </Button>
  );
}
