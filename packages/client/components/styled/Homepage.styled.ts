import styled, { css } from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  max-width: 1040px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin: 120px 32px;
  column-gap: 50px;

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
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
  margin: 0 32px;
`;

export const InstagramContainer = styled.div`
  max-width: 1040px;
  margin: 40px 32px 42px 32px;

  @media screen and (max-width: 835px) {
    margin: 0px 16px 42px 16px;
  }
`;
export const InstagramImageContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;

  @media screen and (max-width: 835px) {
    row-gap: 16px;
    column-gap: 16px;
  }
`;

export const InstaImage = styled.img`
  height: 230px;
  width: 242px;
  object-fit: cover;

  @media screen and (max-width: 835px) {
    height: 163px;
    width: 163px;
  }
`;
