import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 60px;
  @media screen and (max-width: 835px) {
    justify-content: flex-start;
    margin-bottom: 30px;
  }
`;

export const FooterInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => ` ${props.theme.primaryGreen}`};
  padding-bottom: 32px;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OpeningHoursWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
