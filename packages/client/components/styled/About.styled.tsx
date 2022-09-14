import styled from "styled-components";

export const BodyContainer = styled.body`
  width: 100%;
  padding: 0 3rem 0 3rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

export const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextWtapper = styled.div`
  flex-direction: column;
`;
export const CardContainer = styled.div`
  border: ${(props) => `1px solid ${props.theme.textBlack}`};
  width: 509px;
  height: 348px;
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
