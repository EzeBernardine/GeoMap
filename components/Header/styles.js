import styled from "styled-components";
import { Flex } from "../Box/styles";

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.palette.primary.darkTeal};
`;

export const HeaderSub = styled(Flex)`
  height: 72px;
`;

export const Logo = styled.div`
  margin-left: 19px;
`;
 