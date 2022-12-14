import styled from "styled-components";

interface Props {
  white?: boolean;
}

const HeadingTwo = styled.h2<Props>`
  font-family: "Avenir", sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;

  margin: 0;
  padding: 0;
  @media screen and (max-width: 835px) {
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
  }
`;

export default HeadingTwo;
