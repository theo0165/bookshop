import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 48px;
  @media screen and (max-width: 834px) {
    margin: 0 32px;
  }
  @media screen and (max-width: 700px) {
    margin: 0 15px;
  }
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

  // @media screen and (max-width: 1100px) {
  //   margin: 0 16px;
  // }  
  // @media screen and (max-width: 835px) {
  //   margin: 0 32px;
  // }
  @media screen and (max-width: 700px) {
    margin: 0;
  }
`;

export const InstagramContainer = styled.div`
  max-width: 1040px;
  margin: 40px 0px;

  @media screen and (max-width: 1100px) {
    margin: 24px 0px;
  }

  @media screen and (max-width: 835px) {
    margin: 24px 0px;
  }
  @media screen and (max-width: 700px) {
    margin: 24px 0px;
  }
`;
export const InstagramImageContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 20px;
  column-gap: 20px;

  &:nth-child(1) {
    display: none;
  }

  @media screen and (max-width: 835px) {
    row-gap: 16px;
    column-gap: 16px;
  }
  @media screen and (max-width: 700px) {
  }
`;

export const InstaImage = styled.img`
  height: 230px;
  width: 242px;
  object-fit: cover;

  @media screen and (max-width: 835px) {
    height: 223px;
    width: 223px;  }

  @media screen and (max-width: 700px) {
    height: 163px;
    width: 163px;
  }
`;
export const InstaLink = styled.a`
  &:nth-child(9) {
    display: none;
  }

  @media screen and (max-width: 835px) {
    &:nth-child(9) {
      display: inline;
    }
  }
  @media screen and (max-width: 700px) {
    &:nth-child(9) {
      display: none;
    }
  }
`;
