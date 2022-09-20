import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 32px;
`;

export const HeroContainer = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
  margin: 120px 0;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    row-gap: 50px;
    margin-top: 60px;
    margin-bottom: 60px;
  }
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
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
`;
