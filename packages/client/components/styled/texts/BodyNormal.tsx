import styled from "styled-components";

const BodyNormal = styled.p`
  font-family: "Avenir", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;

  @media screen and (max-width: 835px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export default BodyNormal;
