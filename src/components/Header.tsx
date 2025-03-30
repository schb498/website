import {
  Container,
  Text,
  Button,
  useMantineColorScheme,
  useMantineTheme,
  Title,
} from "@mantine/core";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

function Header() {
  const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  return (
    <Container
      size="full"
      style={{
        padding: "10px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <Title order={1} ta="center">
        Project Demo
      </Title>
      <Button
        onClick={toggleColorScheme}
        variant="outline"
        style={{ marginTop: "10px" }}
      >
        {colorScheme === "light" ? (
          <MdDarkMode size={18} />
        ) : (
          <MdOutlineLightMode size={18} />
        )}
      </Button>
    </Container>
  );
}

export default Header;
