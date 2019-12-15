import styled from "styled-components";
import { Text, Title2 } from "../../styles/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
`;

export const StockInfo = styled.div`
  padding: 40px 40px 0 40px;
`;

export const StockHistory = styled.div`
  flex: 1;
  width: 100%;
  height: 100px !important;
`;

export const Heading = styled.h3`
  ${Text}
  color: ${({ theme }) => theme.colors.dark};
  text-transform: uppercase;
  
`;

export const Logo = styled.img`
  height: 30px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.h2`
  ${Text}
  color: ${({ theme }) => theme.colors.grayDark};
`;

export const Price = styled.h2`
  ${Title2}
  font-weight: 600;
  display: flex;
  align-items: center;
`;
