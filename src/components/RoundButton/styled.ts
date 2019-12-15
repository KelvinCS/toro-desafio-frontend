import styled from "styled-components";
import { Text } from "../../styles/typography";

export const Button = styled.button`
  ${Text}
  padding: 8px 16px;
  min-width: 100px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  outline: none;
  transition: all 0.2s ease-in;
`;
