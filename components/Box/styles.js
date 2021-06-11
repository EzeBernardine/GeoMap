import styled from "styled-components";

export const Flex = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  flex-wrap: ${({ wrap }) => wrap || "wrap"};
  flex-direction: ${({ direction }) => direction || "row"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ pad }) => pad || "0"};
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  & > * {
    min-width: 0;
  }
`;

export const Container = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ pad }) => pad || "0"};
  background-color: ${({ bgColor }) => bgColor || "transparent"};
`;

export const Grid = styled("div")`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  display: grid;
  grid-template-columns: ${(props) => props.columns || "1fr"};
  grid-template-rows: ${(props) => props.rows || "auto"};
  grid-gap: ${(props) => props.gap || "10px"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: 100%;
  & > * {
    min-width: 0;
  }
`;
export const Frame = styled("div")`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  border-radius: ${({ rounded }) => (rounded ? "100%" : "0")};
  overflow: hidden;
  & > img,
  & > canvas,
  & > video {
    min-width: 0;
    object-fit: ${({ object }) => (object ? object : "cover")};
    width: 100%;
    height: 100%;
  }
`;
