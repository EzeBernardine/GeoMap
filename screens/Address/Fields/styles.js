import styled from "styled-components";
import { Flex, Frame } from "../../../components/Box/styles";

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  padding: 0 16px 16px;
  flex: 1;
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //error text
    & > div > div > div:last-child {
      color: ${({ theme }) => theme.palette.error.main};
      font-size: ${({ theme }) => theme.fontSizes.xsmall};
      text-align: start;
    }
    & > button {
      margin-top: 50px;
    }
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.palette.grey.dark};
  font-size: ${({ theme }) => theme.fontSizes.small};
  letter-spacing: 0.005em;
  line-height: 21px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.fontWeightNormal};
`;
export const FieldWrap = styled(Flex)`
  > input {
    margin-top: ${({ theme }) => theme.spacing.xsmall};
    background-color: ${({ theme }) => theme.palette.common.white};
    border: 2px solid ${({ theme }) => theme.palette.grey.line};
    border-radius: ${({ theme }) => theme.shape.borderRadius};
    width: 100%;
    padding: 18px 10px;
    :focus,
    :active {
      border: 2px solid ${({ theme }) => theme.palette.primary.darkTeal};
    }
  }
`;

export const RadioField = styled(Flex)`
  position: relative;
  cursor: pointer;
  width: 80px;
  height: 48px;
  margin-right: ${({ theme }) => theme.spacing.small};
  > input[type="radio"] {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
  }
  > input[type="radio"]:checked + div {
    border: 2px solid ${({ theme }) => theme.palette.primary.darkTeal};
  }
  > input[type="radio"]:checked + div:before {
    color: ${({ theme }) => theme.palette.primary.darkTeal};
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  }
`;
export const Radio = styled(Flex)`
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border: 2px solid ${({ theme }) => theme.palette.grey.line};
  :before {
    content: ${({ value }) => `'${value}'`};
    position: absolute;
    color: ${({ theme }) => theme.palette.grey.dark};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  }
`;
