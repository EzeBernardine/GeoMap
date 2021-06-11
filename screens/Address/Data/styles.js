import styled from "styled-components";
import { Flex, Frame } from "../../../components/Box/styles";

export const Container = styled(Flex)`
  background: ${({ theme }) => theme.palette.grey[100]};
  padding: 18px 12px;
  height: max-content;
  margin: 0 16px;
  width: auto;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const Radio = styled(Flex)`
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border: 2px solid ${({ theme }) => theme.palette.grey[200]};
  width: 68px;
  height: 32px;
  :before {
    content: ${({ value }) => `'${value}'`};
    position: absolute;
    color: ${({ theme }) => theme.palette.grey[300]};
    font-weight: ${({ theme }) => theme.typography.fontWeightNormal};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.grey.dark};
  margin: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeightNormal};
  padding-left: 15px;
  text-align: start;
  letter-spacing: 0.005em;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
