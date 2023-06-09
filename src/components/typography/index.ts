//Libs
import styled from "styled-components";

//Types
import { TypographyProps } from "./types";

export const Typography = styled.span<TypographyProps>`
  font-size: ${({ fontSize = "1rem" }) => fontSize};
  font-weight: ${({ fontWheight = "400" }) => fontWheight};
  font-family: ${({ fontFamily = "Poppins" }) => fontFamily};
  color: ${({ color = "#fff" }) => color};
`;
