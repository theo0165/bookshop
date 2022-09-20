import styled, { css } from 'styled-components';

export const NewsItemImage = styled.img`
  height: 489px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;

  @media screen and (max-width: 835px) {
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  max-width: 1040px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: baseline;
  column-gap: 50px;

  @media screen and (max-width: 700px) {
    flex-direction: row;
    row-gap: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: start;
  }
`;
export const NewsItemTitle = styled.div``;
export const Date = styled.div`
  border: 1px solid ${(props) => props.theme.textBlack};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 8px;

  * {
    display: inline-block;
    margin: 0;
    line-height: normal;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  margin-bottom: 120px;

  @media screen and (max-width: 833px) {
    flex-direction: column-reverse;
    margin-bottom: 60px;

  }
`;

export const TimeDateContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 44px;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (max-width: 833px) {
    margin-left: 0px;
    margin-top: 0px;
  }
  @media screen and (max-width: 700px) {
    margin-left: 0px;
  }
`;
export const FlexWrapper = styled.div`
  display: flex;
  width: 400px;
  margin: 0 auto;
  padding-left: 124px;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (max-width: 833px) {
    flex-direction: row;
    margin-left: 0px;
    padding-left: 0px;
  }
  @media screen and (max-width: 700px) {
    display: initial;
    margin-left: 0px;
    padding-left: 0px;
  }
`;
export const DateTimeInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  justify-content: center;
  height: 100%;

  svg {
    width: 21px;
    height: 21px;
  }
  @media screen and (max-width: 833px) {
    justify-content: flex-start;
    width: 158px;
  }

  @media screen and (max-width: 700px) {
    justify-content: flex-start;
    width: 158px;
  }
`;
