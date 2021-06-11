import styled from "styled-components";
import { Flex } from "../../components/Box/styles";

export const MapStyle = styled.main`
  min-height: calc(100vh - 72px);
  position: relative;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;
export const AlertWrap = styled.div`
  position: absolute;
  background: black;
`;

export const ButtonWrap = styled(Flex)`
  position: absolute;
  bottom: 20px;
  margin: 0 auto;
  right: 0;
  left: 0;
  top: auto;
  height: auto;
`;
export const MapFrame = styled.main`
  min-height: calc(100vh - 72px);
`;
