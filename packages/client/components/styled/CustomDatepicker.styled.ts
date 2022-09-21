import styled from "styled-components";

export const DateContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 10px;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
  svg {
    width: 24px;
    height: 24px;
  }

  p {
    margin: 0;
    padding-top: 5px;
  }
`;
