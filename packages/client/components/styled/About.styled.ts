import styled from "styled-components";

export const BodyContainer = styled.div`
  flex-direction: column;
  display: flex;
  max-width: 1040px;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 0;

  @media screen and (max-width: 835px) {
    margin-left: 32px;
    margin-right: 32px;
  }
  @media screen and (max-width: 700px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const HeroSection = styled.div`
  display: flex;
  margin-bottom: 100px;
  margin: 120px 32px;
  justify-content: space-between;
  column-gap: 50px;

  @media screen and (max-width: 835px) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    margin-top: 50px;
  }
`;
export const TextWrapperFirst = styled.div`
  max-width: 470px;
`;
export const CardWrapper = styled.div`
  max-width: 1040px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
  margin: 0 32px;

  @media screen and (max-width: 835px) {
    gap: 16px;
    margin: 0 20px 32px 20px;
  }
`;

export const ImageWrapper = styled.div<{ order: string }>`
  width: calc(50% - 12px);
  order: ${(props) => props.order};

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const ImageChild = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CardContainer = styled.div<{ order: string }>`
  order: ${(props) => props.order};
  border: ${(props) => `1px solid ${props.theme.textBlack}`};
  padding: 2rem 2rem 3rem 2rem;
  width: calc(50% - 12px);

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const HeroSectionTwo = styled.div`
  display: flex;
  margin-bottom: 100px;
  margin: 120px 32px;
  justify-content: space-between;
  column-gap: 50px;

  @media screen and (max-width: 835px) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;
export const TextWtapperSecond = styled.div`
  flex-direction: column;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;
