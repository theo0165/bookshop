import { css } from "styled-components";
import styled from "styled-components";

export const Container = styled.a`
  border: 1px solid ${(props) => props.theme.textBlack};
  position: relative;
  border-radius: 4px;
  width: 330px;
  height: 600px;

  @media screen and (max-width: 835px) {
    width: 375px;
  }
  @media screen and (max-width: 700px) {
    width: 343px;
  }
`;
export const Overlay = styled.div<{ inverted?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.backgroundGray};
  z-index: 99;
  display: ${(props) => (props.inverted ? "none" : "initial")};
`;

export const Top = styled.div`
  position: relative;
`;

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 365px;
`;

export const Date = styled.div`
  background: ${(props) => props.theme.textWhite};
  border: 1px solid ${(props) => props.theme.textBlack};
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 8px;
  text-align: center;
  padding: 8px;

  * {
    display: inline-block;
    margin: 0;
    line-height: normal;
  }
`;

export const HeadingThree = styled.p`
  font-size: 26px;
  font-weight: 500;
`;

export const Time = styled.div`
  background: ${(props) => props.theme.textWhite};
  position: absolute;
  bottom: 8px;
  right: 8px;
  border: 1px solid ${(props) => props.theme.textBlack};
  border-radius: 4px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-bottom: 3px;
    margin-right: 4px;
  }

  * {
    margin: 0;
    line-height: normal;
  }
`;

export const Bottom = styled.div`
  padding: 24px 8px;
  height: calc(600px - 365px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ReadMore = styled.div`
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
  align-self: center;
`;
