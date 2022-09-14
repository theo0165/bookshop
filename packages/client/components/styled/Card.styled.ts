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

  border-radius: 4px;

  ${(props) =>
    props.width === "fullRow" &&
    css`
      width: 100%;
      height: 430px;
    `}
  ${(props) =>
    props.width === "halfRow" &&
    css`
      width: calc(50% - 12px);
      height: 350px;
    `};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
