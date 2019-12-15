import React from "react";
import { Container } from "./styled";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

export default function Navbar() {
  return (
    <Container>
      <Logo style={{ height: "20px" }} />
    </Container>
  );
}
