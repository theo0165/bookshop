import { NextPage } from "next";
import Link from "next/link";
import {
  AiOutlineClockCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlinePhone,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import GlobalSettings from "../types/GlobalSettings";
import {
  ContactWrapper,
  FooterContainer,
  FooterInfoWrapper,
  LinksWrapper,
  LinkText,
  LogoWrapper,
  OpeningHoursWrapper,
  SocialsWrapper,
} from "./styled/Footer.styled";
import { Logo } from "./styled/Header.styles";
import BodyNormal from "./styled/texts/BodyNormal";
import HeadingThree from "./styled/texts/HeadingThree";
import { InfoItem, SocialLink } from "./styled/TopInfoBar.styled";

interface Props {
  settings: GlobalSettings;
}

const Footer: NextPage<Props> = ({ settings }) => {
  return (
    <>
      <FooterContainer>
        <LogoWrapper>
          <Link href="/">
            <a>
              <Logo src={settings.logo}></Logo>
            </a>
          </Link>
        </LogoWrapper>
        <FooterInfoWrapper>
          <SocialsWrapper>
            <HeadingThree>Sociala medier</HeadingThree>
            <LinksWrapper>
              <SocialLink href={settings.instagram}>
                <AiOutlineInstagram />
              </SocialLink>
              <LinkText>Instagram</LinkText>
            </LinksWrapper>
            <LinksWrapper>
              <SocialLink href={settings.facebook}>
                <AiOutlineFacebook />
              </SocialLink>
              <LinkText>Facebook</LinkText>
            </LinksWrapper>
          </SocialsWrapper>
          <ContactWrapper>
            <HeadingThree>Kontakt/ Hitta hit</HeadingThree>
            <InfoItem>
              <AiOutlinePhone />
              <a
                href={`tel:+46${settings.number
                  .replaceAll(" ", "")
                  .substring(1)}`}
              >
                <BodyNormal>{settings.number}</BodyNormal>
              </a>
            </InfoItem>
            <InfoItem>
              <HiOutlineLocationMarker />
              <BodyNormal>{settings.address}</BodyNormal>
            </InfoItem>
          </ContactWrapper>
          <OpeningHoursWrapper>
            <HeadingThree>Öppetider</HeadingThree>
            <InfoItem>
              <AiOutlineClockCircle />
              <BodyNormal>{settings.openingHours}</BodyNormal>
            </InfoItem>
          </OpeningHoursWrapper>
        </FooterInfoWrapper>
      </FooterContainer>
    </>
  );
};
export default Footer;
