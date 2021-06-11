import styled from "styled-components";
import { Flex } from "../../components/Box/styles";

export const WelcomeStyle = styled.div`
  max-width: 360px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.palette.primary.white};
  min-height: calc(100vh - 72px);
`;

export const Header1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  padding: ${({ theme }) => theme.spacing.xlarge + " "};
  text-align: center;
`;

export const ButtonWrap = styled(Flex)`
  margin: 0 auto;
  width: 100%;
`;
