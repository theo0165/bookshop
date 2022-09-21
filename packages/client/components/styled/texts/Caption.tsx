import styled, { css } from "styled-components";

interface Props {
  grey?: boolean;
}

const Caption = styled.span<Props>`
  font-family: "Avenir", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 30px;
  text-transform: uppercase;

  ${(props) =>
    props.grey &&
    css`
      color: ${props.theme.textGray};
    `}
`;

export default Caption;
