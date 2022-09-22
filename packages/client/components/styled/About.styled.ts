import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 48px;
`;

export const HeroSection = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
  margin: 0;

  @media screen and (max-width: 835px) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    margin-top: 50px;
  }
`;
export const TextWrapperFirst = styled.div`
  /* max-width: 470px; */
`;
export const CardWrapper = styled.div`
  max-width: 1040px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;

  @media screen and (max-width: 835px) {
    gap: 16px;
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
  max-width: 1040px;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
  margin: 120px 0;

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
