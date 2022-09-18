import styled from "styled-components";

const HeadingOne = styled.h1`
  font-family: "Avenir", sans-serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;

  @media screen and (max-width: 835px) {
    font-size: 26px;
    line-height: 30px;
  }
`;

export default HeadingOne;
