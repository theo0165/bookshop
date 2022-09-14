import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;
  padding: 0 200px 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const HeroSection = styled.div`
  display: flex;
  margin-bottom: 100px;
`;
export const TextWtapperFirst = styled.div`
  flex-direction: column;
  padding-right: 200px;
`;
export const CardContainer = styled.div`
  border: ${(props) => `1px solid ${props.theme.textBlack}`};
  width: 509px;
  height: 348px;
  padding: 2rem 2rem 3rem 2rem;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 94px;
`;
export const TextWtapperSecond = styled.div`
  flex-direction: column;
  padding-left: 200px;
`;
