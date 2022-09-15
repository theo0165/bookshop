import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1040px;
  margin: 0 auto;

  @media screen and (max-width: 1040px) {
    margin: 0 32px;
  }
`;

export const CardContainer = styled.div``;

export const Card = styled.div<{ bg: "green" | "white" }>`
  border-radius: 4px;

  ${(props) =>
    props.bg === "green" &&
    css`
      background: ${props.theme.textWhite};
      border: 1px solid ${props.theme.textBlack};
    `}

  ${(props) =>
    props.bg === "white" &&
    css`
      background: ${props.theme.primaryGreen};
      color: white;
    `}
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
`;

export const Button = styled.div<{ greenBg?: boolean }>``;
