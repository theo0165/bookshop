import styled from "styled-components";

export const BodyContainer = styled.div`
  /* width: 100%;
  padding: 0 200px 0 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px; */
  flex-direction: column;
  display: flex;
  max-width: 1040px;
  margin: 60px auto;
  justify-content: space-around;
  align-items: center;
`;

export const HeroSection = styled.div`
  display: flex;
  margin-bottom: 100px;
`;
export const TextWrapperFirst = styled.div`
  flex-direction: column;
  padding-right: 3rem;
`;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 94px;

  @media screen and (max-width: 835px) {
    gap: 16px;
    margin: 0 20px 0 20px;
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardContainer = styled.div`
  border: ${(props) => `1px solid ${props.theme.textBlack}`};
  padding: 2rem 2rem 3rem 2rem;
`;

export const TextWtapperSecond = styled.div`
  flex-direction: column;
  padding-left: 3rem;
`;
