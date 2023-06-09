//Libs
import styled from "styled-components";

//Types
import { FlexProps } from "./types";

export const Flex = styled.div<FlexProps>`
  display: flex;
  gap: ${({ gap = "0" }) => gap};
  align-items: ${({ alignItems = "center" }) => alignItems};
  flex-direction: ${({ direction = "row" }) => direction};
  flex-wrap: ${({ wrap = "nowrap" }) => wrap};
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
`;
