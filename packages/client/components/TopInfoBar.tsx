import { FC, forwardRef } from "react";
import GlobalSettings from "../types/GlobalSettings";
import * as S from "./styled/TopInfoBar.styled";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  AiOutlineClockCircle,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import BodyNormal from "./styled/texts/BodyNormal";

interface Props {
  settings: GlobalSettings;
}

const TopInfoBar = forwardRef<HTMLDivElement, Props>(({ settings }, ref) => {
  return (
    <S.Container ref={ref}>
      <S.inner>
        <S.InfoItem>
          <HiOutlineLocationMarker />
          <BodyNormal>{settings.address}</BodyNormal>
        </S.InfoItem>

        <S.InfoItem>
          <AiOutlineClockCircle />
          <BodyNormal>{settings.openingHours}</BodyNormal>
        </S.InfoItem>

        <S.InfoItem>
          <AiOutlinePhone />
          <a
            href={`tel:+46${settings.number.replaceAll(" ", "").substring(1)}`}
          >
            <BodyNormal>{settings.number}</BodyNormal>
          </a>
        </S.InfoItem>

        <S.Social>
          <S.SocialLink href={settings.facebook}>
            <AiOutlineFacebook />
          </S.SocialLink>

          <S.SocialLink href={settings.instagram}>
            <AiOutlineInstagram />
          </S.SocialLink>

          <S.SocialLink href={`mailto:${settings.email}`}>
            <AiOutlineMail />
          </S.SocialLink>
        </S.Social>
      </S.inner>
    </S.Container>
  );
});
export default TopInfoBar;
