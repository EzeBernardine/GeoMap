import styled from "styled-components";
import { Flex, Frame } from "../../components/Box/styles";

export const AddressStyle = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 22px 0;
  font-weight: normal;
  color: ${({ theme }) => theme.palette.primary.darkTeal};
`;
export const ImageSection = styled(Flex)`
  text-align: center;
  padding: 0 16px;
  color: ${({ theme }) => theme.palette.primary.darkTeal};
`;
export const LocationWrap = styled(Flex)`
  position: relative;
`;
export const LayoutImage = styled(Frame)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
export const LocationImage = styled(Frame)`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;
export const ButtonWrap = styled(Flex)`
  position: ${({ position }) => position || "relative"};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;

export const CameraWrap = styled(Frame)`
  position: relative;
  display: ${({ visible }) => (visible ? "block" : "none")};
  margin: ${({ theme }) => theme.spacing.small + " " + '16px' };
`;
