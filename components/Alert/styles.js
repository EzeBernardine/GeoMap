import styled from "styled-components";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.mobileStepper};
  position: relative;
  padding: 20px 30px 20px 30px;
  width: 100%;
  display: flex;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  border: ${({ type, theme }) =>
    type === "success"
      ? `1px solid ${theme.palette.success.light}`
      : type === "warning"
      ? `1px solid  ${theme.palette.warning.light}`
      : type === "info"
      ? `1px solid  ${theme.palette.info.light}`
      : `1px solid  ${theme.palette.error.light}`};
  background: ${({ type, theme }) =>
    type === "success"
      ? theme.palette.success.light
      : type === "warning"
      ? theme.palette.warning.light
      : type === "info"
      ? theme.palette.info.light
      : theme.palette.error.light};
`;

export const IconType = styled.span`
  margin-right: 20px;
  > svg {
    color: ${({ type, theme }) =>
      type === "success"
        ? theme.palette.success.main
        : type === "warning"
        ? theme.palette.warning.main
        : type === "info"
        ? theme.palette.info.main
        : theme.palette.error.main};
  }
`;
export const Children = styled.span`
  * {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 20px;
    color: ${({ type, theme }) =>
      type === "success"
        ? theme.palette.success.dark
        : type === "warning"
        ? theme.palette.warning.dark
        : type === "info"
        ? theme.palette.info.dark
        : theme.palette.error.dark};
  }
`;
export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  padding: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.grey[200]};
  font-size: ${({ theme }) => theme.fontSizes.xxsmall};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  :hover {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.grey[300]};
  }
`;
