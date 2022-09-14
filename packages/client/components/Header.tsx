import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import GlobalSettings from "../types/GlobalSettings";
import * as S from "./styled/Header.styles";
import HeadingThree from "./styled/texts/HeadingThree";

interface Props {
  settings: GlobalSettings;
  offset?: number;
}

const Header: FC<Props> = ({ settings, offset }) => {
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    setIsSticky(offset ? window.scrollY >= offset : false);
    console.log("scroll");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.HeaderContainer sticky={isSticky}>
      <S.Logo src={settings.logo}></S.Logo>
      <S.nav>
        <S.navList>
          <S.navItem selected={router.asPath === "/"}>
            <Link href="/">
              <a>
                <HeadingThree>Hem</HeadingThree>
              </a>
            </Link>
          </S.navItem>

          <S.navItem selected={router.asPath === "/nyheter"}>
            <Link href="/nyheter">
              <a>
                <HeadingThree>Nyheter/Evenemang</HeadingThree>
              </a>
            </Link>
          </S.navItem>

          <S.navItem selected={router.asPath === "/om"}>
            <Link href="/om">
              <a>
                <HeadingThree>Om oss</HeadingThree>
              </a>
            </Link>
          </S.navItem>
        </S.navList>
      </S.nav>
    </S.HeaderContainer>
  );
};

export default Header;
