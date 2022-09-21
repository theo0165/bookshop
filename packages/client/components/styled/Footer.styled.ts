import styled from "styled-components";

export const FooterContainer = styled.div`
  margin: 0 32px;
  color: ${(props) => ` ${props.theme.primaryGreen}`};
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 50px 0 50px 0;
  @media screen and (max-width: 835px) {
    margin: 40px 0 40px 32px;

    justify-content: start;
  }
`;
export const LogoFooter = styled.img`
  width: 100px;
`;

export const FooterInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 32px;
  margin: 0 32px;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
`;
export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
