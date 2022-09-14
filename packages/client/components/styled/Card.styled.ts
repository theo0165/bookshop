import styled, { css } from "styled-components";

interface CardProps {
  width: "fullRow" | "halfRow";
  background: "green" | "white";
}

export const Card = styled.div<CardProps>`
  color: ${(props) =>
    props.background === "green"
      ? props.theme.textWhite
      : props.theme.textBlack};

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

export const QuoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
  margin: 0 auto;
`;

export const LinkContainer = styled.div`
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 24px;
  }
`;

export const NoLinkContainer = styled.div<{ fullWidth?: boolean }>`
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${(props) =>
    props.fullWidth
      ? css`
          width: 52%;
        `
      : css`
          width: 80%;
        `}

  p {
    margin-top: 14px;
    margin-bottom: 0;
    width: 75%;
  }
`;
