import styled, { css } from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  max-width: 1040px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin: 120px 32px;
  column-gap: 50px;
`;

export const HeroText = styled.div`
  max-width: 470px;
`;

export const HeroImage = styled.img`
  height: 310px;

  @media screen and (max-width: 835px) {
    height: 200px;
  }
`;

export const CardsContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
  margin: 0 32px;
`;
