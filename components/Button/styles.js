import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: ${({ theme, bgColor, disabled }) =>
    disabled ? theme.palette.grey.medium : theme.palette.primary[bgColor]};
  color: ${({ theme, color, disabled }) =>
    disabled ? theme.palette.grey.dark : theme.palette.primary[color]};
  font-size: ${({ theme, size }) => theme.fontSizes[size]};
  border: ${({ theme, border, disabled }) =>
    disabled
      ? theme.palette.grey.medium
      : !!border
      ? "2px solid " + theme.palette.primary[border]
      : "none"};
  width: ${({ width }) => width || "100%"};
  max-width: 329px;
  margin: 0 auto;
  height: 48px;
  border-radius: 10px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  :hover {
    color: ${({ theme, bgColor, disabled }) =>
      disabled
        ? theme.palette.grey.dark
        : bgColor === "transaprent"
        ? theme.palette.common.white
        : theme.palette.primary[bgColor]};
    background-color: ${({ theme, color, disabled }) =>
      disabled ? theme.palette.grey.medium : theme.palette.primary[color]};
  }
`;
