import styled, { css } from "styled-components";

export const HeaderContainer = styled.header<{ sticky?: boolean }>`
  max-width: 1042px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.textWhite};
  z-index: 999999;

  ${(props) =>
    props.sticky &&
    css`
      position: sticky;
      top: 0;
    `}
`;

export const Logo = styled.img`
  width: 100px;
`;

export const nav = styled.nav`
  align-self: end;
  margin-bottom: 7px;
`;

export const navList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const navItem = styled.li<{ selected: boolean }>`
  display: inline-block;
  margin-right: 72px;

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
      border-bottom: 1px solid ${props.theme.orange};
    `}

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.orange};
  }
`;
