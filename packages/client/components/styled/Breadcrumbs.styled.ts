import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1040px) {
    padding: 0 32px;
  }

  p {
    display: inline-block;
    margin-right: 4px !important;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
