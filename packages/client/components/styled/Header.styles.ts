import styled, { css } from "styled-components";

//break at 800px

export const HeaderContainer = styled.header<{ sticky?: boolean }>`
  width: 100%;
  z-index: 999999;
  background: ${(props) => props.theme.textWhite};
  padding: 0 32px;

  ${(props) =>
    props.sticky &&
    css`
      @media screen and (min-width: 834px) {
        position: sticky;
        top: 0;
      }
    `}
`;

export const HeaderInner = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.textWhite};
`;

export const Logo = styled.img`
  width: 100px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const LogoLink = styled.a`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const MobileLogo = styled.img`
  height: 50px;
`;

export const MobileLogoLink = styled.a`
  display: none;
  padding-top: 32px;
  padding-bottom: 8px;

  @media screen and (max-width: 800px) {
    display: inline-block;
  }
`;

export const nav = styled.nav`
  align-self: end;
  margin-bottom: 7px;

  @media screen and (max-width: 800px) {
    margin-bottom: 25px;
  }
`;

export const navList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const navItem = styled.li<{ selected: boolean }>`
  display: inline-block;
  margin-right: 72px;
  border-bottom: 1px solid ${(props) => props.theme.textWhite};
  position: relative;

  &:last-of-type {
    margin-right: 0;
  }

  h3 {
    margin: 0;
    margin-bottom: 8px;
  }

  ${(props) =>
    props.selected &&
    css`
      border-color: ${props.theme.orange};
    `}

  ${(props) =>
    !props.selected &&
    css`
      &:hover {
        &:before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          border-bottom: solid 1px ${(props) => props.theme.orange};
          animation: border_anim 0.15s linear forwards;
        }
      }
    `}

  @keyframes border_anim {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const MobileNav = styled.nav<{ show?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.primaryGreen};
  color: white;
  transition: transform 0.5s ease-in-out;
  z-index: 9999999999;

  ${(props) =>
    !props.show &&
    css`
      transform: translateX(100%);
    `}
`;

export const MobileNavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: flex;
  flex-direction: column;
  row-gap: 48px;

  position: absolute;
  top: 100px;
  left: 16px;
`;

export const MobileNavItem = styled.li<{ selected?: boolean }>`
  display: inline-block;

  h3 {
    margin: 0;
  }
`;

export const SocialWrapper = styled.div`
  position: absolute;
  bottom: 32px;
  left: 16px;

  display: flex;
  column-gap: 20px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const SocialLink = styled.a``;

export const MobileNavCloseWrapper = styled.div`
  position: absolute;
  top: 48px;
  right: 16px;
  width: 24px;
  height: 24px;
`;

export const HamburgerWrapper = styled.div`
  display: none;
  width: 24px;
  height: 16px;

  @media screen and (max-width: 800px) {
    display: inline-block;
  }

  svg {
    width: 24px;
  }
`;
