import styled from "styled-components";

export const Container = styled.div`
  height: 64px;
  background: ${(props) => props.theme.primaryGreen};
  color: ${(props) => props.theme.textWhite};
  padding: 0 32px;

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const inner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  p {
    margin: 0;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  justify-content: center;
  height: 100%;
`;

export const SocialLink = styled.a`
  width: 24px;
  height: 24px;

  svg {
    width: 24px;
    height: 24px;
  }
`;
