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
`;

export const nav = styled.nav`
  align-self: end;
  margin-bottom: 7px;

  @media screen and (max-width: 800px) {
    align-self: center;
    margin-bottom: 0;
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

  &:hover {
    border-color: ${(props) => props.theme.orange};
  }
`;

export const MobileNav = styled.nav<{ show?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.primaryGreen};
  color: white;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;

  ${(props) =>
    !props.show &&
    css`
      transform: translateX(0);
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
