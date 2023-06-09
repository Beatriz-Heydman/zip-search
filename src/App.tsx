//Components
import { Flex } from "./components/flex";
import { Input } from "./components/input";
import { Typography } from "./components/typography";

function App() {
  return (
    <Flex
      direction="column"
      gap="1rem"
      style={{
        minWidth: "100%",
        minHeight: "100%",
        background: "linear-gradient(180deg, #121416 0%, #26324F 65.87%)",
      }}
    >
      <Typography fontSize="4rem" style={{ padding: "1rem" }}>
        Buscador de CEP
      </Typography>

      <Input />
    </Flex>
  );
}

export default App;
