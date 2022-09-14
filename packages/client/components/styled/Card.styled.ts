import styled, { css } from "styled-components";

interface CardProps {
  width: "fullRow" | "halfRow";
  background: "green" | "white";
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) =>
    props.background === "green"
      ? props.theme.primaryGreen
      : props.theme.textWhite};

  border: ${(props) =>
    props.background === "green"
      ? "none"
      : `1px solid ${props.theme.textBlack}`};

  ${(props) =>
    props.width === "fullRow" &&
    css`
      width: 100%;
      height: 50px;
      background: red;
    `}
  ${(props) =>
    props.width === "halfRow" &&
    css`
      width: calc(50% - 12px);
      height: 50px;
      background: green;
    `};
`;
