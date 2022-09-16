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
    if (offset && window.scrollY >= offset) {
      setIsSticky(true);
    } else if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.HeaderContainer sticky={isSticky}>
      <S.HeaderInner>
        <Link href="/">
          <a>
            <S.Logo src={settings.logo}></S.Logo>
          </a>
        </Link>
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
      </S.HeaderInner>
    </S.HeaderContainer>
  );
};

export default Header;