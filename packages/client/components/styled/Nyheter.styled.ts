import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1040px;
  margin: 0 auto;

  @media screen and (max-width: 1040px) {
    margin: 0 32px;
  }
  @media screen and (max-width: 833px) {
    margin: 0 28px;
  }
`;

export const CardContainer = styled.div``;

export const Card = styled.div<{ bg: "green" | "white" }>`
  border-radius: 4px;
  padding: 25px 52px 40px 52px;

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

  h2 {
    margin-bottom: 24px;
    margin-top: 24px;
  }

  p {
    margin: 0;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
`;

export const Button = styled.button<{ greenBg?: boolean }>`
  margin-top: 22px;
  background: none;
  border-radius: 4px;
  padding: 8px;
  border: 1px solid
    ${(props) =>
      props.greenBg ? props.theme.primaryGreen : props.theme.textWhite};

  color: ${(props) =>
    props.greenBg ? props.theme.primaryGreen : props.theme.textWhite};

  p {
    margin: 0;
  }
`;

export const NewsContainer = styled.div``;

export const FilterContainer = styled.div``;

export const FilterTop = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
    line-height: normal;
  }
`;

export const DateContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 10px;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
  svg {
    width: 24px;
    height: 24px;
  }

  p {
    margin: 0;
    padding-top: 5px;
  }
`;

export const FilterBottom = styled.div`
  display: flex;
  column-gap: 24px;
  row-gap: 3px;
  flex-wrap: wrap;
  max-width: 600px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  column-gap: 8px;

  p {
    margin: 0;
    line-height: normal;
    margin-top: 4px;
  }
`;

export const CategoryCheckbox = styled.input`
  margin: 0;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.textBlack};
  border-radius: 4px;
`;

export const NewsItems = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  @media screen and (max-width: 835px) {
    gap: 16px;
    justify-content: space-between;
  }
`;