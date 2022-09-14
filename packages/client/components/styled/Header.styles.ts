import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 1040px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const nav = styled.nav``;

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
