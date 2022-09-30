import { NextPage } from 'next';
import Link from 'next/link';
import {
  AiOutlineClockCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlinePhone,
  AiOutlineMail,
} from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import GlobalSettings from '../types/GlobalSettings';
import {
  FooterContainer,
  FooterInfoWrapper,
  FooterItems,
  LinksWrapper,
  LogoFooter,
  LogoWrapper,
} from './styled/Footer.styled';
import { Logo } from './styled/Header.styles';
import BodyNormal from './styled/texts/BodyNormal';
import HeadingThree from './styled/texts/HeadingThree';
import { InfoItem, SocialLink } from './styled/TopInfoBar.styled';

interface Props {
  settings: GlobalSettings;
}

const Footer: NextPage<Props> = ({ settings }) => {
  return (
    <>
      <FooterContainer>
        <LogoWrapper>
          <Link href='/'>
            <a>
              <LogoFooter src={settings.logo}></LogoFooter>
            </a>
          </Link>
        </LogoWrapper>
        <FooterInfoWrapper>
          <FooterItems>
            <HeadingThree>Sociala medier</HeadingThree>
            <LinksWrapper>
              <InfoItem>
                <SocialLink href={settings.instagram}>
                  <AiOutlineInstagram />
                </SocialLink>
                <BodyNormal>Instagram</BodyNormal>
              </InfoItem>
            </LinksWrapper>
            <LinksWrapper>
              <InfoItem>
                <SocialLink href={settings.facebook}>
                  <AiOutlineFacebook />
                </SocialLink>
                <BodyNormal>Facebook</BodyNormal>
              </InfoItem>
            </LinksWrapper>
          </FooterItems>
          <FooterItems>
            <HeadingThree>Kontakt/ Hitta hit</HeadingThree>
            <InfoItem>
              <AiOutlineMail />
              <a
                href={`mailto:${settings.email}`}
              >
                <BodyNormal>{settings.email}</BodyNormal>
              </a>
            </InfoItem>
            <InfoItem>
              <HiOutlineLocationMarker />
              <a href='https://goo.gl/maps/GYiwTHo2qTbvbEtb7'>
                <BodyNormal>{settings.address}</BodyNormal>
              </a>
            </InfoItem>
          </FooterItems>
          <FooterItems>
            <HeadingThree>Öppetider</HeadingThree>
            <InfoItem>
              <AiOutlineClockCircle />
              <BodyNormal>{settings.openingHours}</BodyNormal>
            </InfoItem>
          </FooterItems>
        </FooterInfoWrapper>
      </FooterContainer>
    </>
  );
};
export default Footer;
