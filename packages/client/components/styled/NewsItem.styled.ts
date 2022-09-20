import styled, { css } from 'styled-components';

export const NewsItemImage = styled.img`
  height: 489px;
  width: 1040px;
  object-fit: cover;
  margin-bottom: 20px;


  @media screen and (max-width: 835px) {
    height: 489px;
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
    flex-direction: column-reverse;
    row-gap: 50px;
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;
export const NewsItemTitle = styled.div`

`;
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
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin-bottom: 120px;
`;

export const TimeDateContainer = styled.div`
  display: flex;
  max-width: 1040px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  column-gap: 50px;

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    row-gap: 50px;
    margin-top: 60px;
    margin-bottom: 60px;
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
`;
