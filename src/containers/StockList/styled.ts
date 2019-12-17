import styled from "styled-components";
import { Title, Heading } from "../../styles/typography";

export const ResponsiveRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 650px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Toolbar = styled(ResponsiveRow)`
  justify-content: space-between;
  padding: 32px 0 32px 0;
`;

export const ToolbarButtons = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin-right: 8px;
  }

  button:last-child {
    margin-right: 0;
  }
`;

export const ToolbarTitle = styled.h3`
  ${Heading}
  margin-right: 8px
`;

export const Content = styled.main`
  padding: 0 16px;
  margin-bottom: 32px;

  @media (min-width: 650px) {
    padding: 0 50px;
  }
`;

export const Header = styled.h1`
  ${Title}
  margin: 12px 0
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;

  @media (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
