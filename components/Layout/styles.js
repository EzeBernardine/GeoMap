import styled from "styled-components";

export const LayoutStyle = styled.main`
  max-width: 360px;
  margin: 0 auto;
  min-height: 100vh;
  > div {
    min-height: calc(100vh - 72px);  display: grid;
  align-items: flex-start;
  }
`;
