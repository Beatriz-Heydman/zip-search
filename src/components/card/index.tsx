//Styles
import { StyledCard } from "./styles";

//Components
import { Flex } from "../flex";
import { Typography } from "../typography";

//Types
import { CardProps } from "./types";

export function Card({ city, district, state, zip }: CardProps) {
  return (
    <Flex style={{ width: "90%" }}>
      <StyledCard>
        <Typography fontSize="0.9rem">Cidade: {city}</Typography>
        <Typography fontSize="0.9rem">Estado: {state}</Typography>
        <Typography fontSize="0.9rem">Bairro: {district}</Typography>
        <Typography fontSize="0.9rem">CEP: {zip}</Typography>
      </StyledCard>
    </Flex>
  );
}
