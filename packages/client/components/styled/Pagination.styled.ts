import styled, { css } from "styled-components";

const ButtonBase = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  * {
    margin: 0;
    line-height: normal;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  justify-content: center;
  column-gap: 42px;
  margin-top: 56px;

  margin-bottom: 20px;
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;

  * {
    margin: 0;
    line-height: normal;
  }

  p {
    margin: 0 10px;
    padding: 8px;
  }
`;

export const Page = styled(ButtonBase)<{ isSelected: boolean }>`
  border-radius: 4px;
  padding: 8px 8px;

  margin: 0 10px;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid ${(props) => props.theme.orange};
    `}
`;

export const Prev = styled(ButtonBase)``;

export const Next = styled(ButtonBase)``;

export const Reverse = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
