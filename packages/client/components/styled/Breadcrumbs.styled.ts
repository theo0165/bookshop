import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;

  p {
    display: inline-block;
    margin-right: 4px !important;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
