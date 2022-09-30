import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1040px;
  margin: 0 auto;

  @media screen and (max-width: 1040px) {
    margin: 0 48px;
  }
  @media screen and (max-width: 833px) {
    margin: 0 32px;
  }
  @media screen and (max-width: 700px) {
    margin: 0 16px;
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

  @media screen and (max-width: 821px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 24px;
  }
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

  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.greenBg ? props.theme.primaryGreen : props.theme.textWhite};
    color: ${(props) =>
      props.greenBg ? props.theme.textWhite : props.theme.primaryGreen};
  }

  p {
    margin: 0;
  }
`;

export const NewsContainer = styled.div`
  margin-top: 48px;
`;

export const FilterContainer = styled.div`
  position: relative;
`;

export const FilterTop = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  p {
    margin: 0;
    line-height: normal;
  }

  .react-datepicker-wrapper {
    width: auto !important;
  }
`;

export const FilterBottom = styled.div`
  display: flex;
  column-gap: 24px;
  row-gap: 3px;
  flex-wrap: wrap;
  max-width: 600px;
  position: relative;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const DesktopFilters = styled.div``;

export const MobileFilters = styled.div<{ display?: boolean }>`
  position: absolute;
  background: ${(props) => props.theme.textWhite};
  z-index: 1000;
  bottom: 40px;
  padding: 24px 32px;
  border: 0.1px solid ${(props) => props.theme.textBlack};
  display: none;
  border-radius: 4px;

  ${(props) =>
    props.display &&
    css`
      @media screen and (max-width: 700px) {
        display: inline-block;
      }
    `}
`;

export const MobileFilterArrow = styled.div`
  position: absolute;
  bottom: -23px;
  left: 10px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const MobileFilterItems = styled.div``;

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
  justify-content: center;

  @media screen and (max-width: 835px) {
    gap: 16px;
    justify-content: center;
  }
`;

export const DateContainer = styled.div`
  .clearBtn {
    cursor: pointer;
    /* padding-left: 15px; */
    text-align: center;
    text-decoration: underline;
    margin-bottom: 5px;
  }
`;
