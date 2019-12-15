import styled from "styled-components";

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 16px 0 16px 16px;

  @media (min-width: 650px) {
    padding: 22px 0 22px 50px;
  }
`;

export const Logo = styled.img`
  height: 50px;
`;
