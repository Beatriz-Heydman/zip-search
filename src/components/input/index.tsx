//Libs
import { useState } from "react";

//Components
import { Card } from "../card";
import { Flex } from "../flex";

//Styles
import { InputStyled } from "./styles";

//Types
import { Cep } from "./types";

//Services
import { api } from "../../services/api";

export function Input() {
  const [cep, setCep] = useState<Cep | undefined>();

  const [error, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch(cep: string) {
    if (cep === "") {
      alert("Preencha algum cep...");
      return;
    }

    try {
      setIsLoading(true);
      const response = await api.get(`${cep}/json`);
      setCep(response.data);

      if (response.data.erro) {
        setError(true);
      } else {
        setError(false);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setCep(undefined);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Flex direction="column" gap="1rem" style={{ width: "100%" }}>
      <Flex
        style={{
          position: "relative",
          width: "min(555px, 90%)",
        }}
      >
        <InputStyled
          type="text"
          placeholder="Digite algum cep..."
          onChange={(event) => {
            const value = event.currentTarget.value;

            if (value.length === 8) {
              handleSearch(value);
            }
          }}
        />
      </Flex>

      {isLoading ? (
        <span>Carregando...</span>
      ) : (
        error && <span>Digite um cep valido</span>
      )}

      {cep && !error && !isLoading && (
        <Card
          city={cep.localidade}
          district={cep.logradouro}
          state={cep.uf}
          zip={cep.cep}
        />
      )}
    </Flex>
  );
}
