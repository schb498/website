import {
  Container,
  Button,
  useMantineColorScheme,
  Title,
  Group,
} from "@mantine/core";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { HiHome } from "react-icons/hi"; // Home icon import
import { Link } from "react-router-dom";

function Header() {
  // const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  return (
    <Container
      size="full"
      style={{
        padding: "20px",
        top: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <Title order={1} ta="center">
        Project Demo
      </Title>
      <Group style={{ marginTop: "10px" }}>
        <Button
          variant="outline"
          component={Link}
          to="/"
          style={{ marginRight: "10px" }}
        >
          <HiHome size={18} /> {/* Home icon */}
        </Button>
        <Button onClick={toggleColorScheme} variant="outline">
          {colorScheme === "light" ? (
            <MdDarkMode size={18} />
          ) : (
            <MdOutlineLightMode size={18} />
          )}
        </Button>
      </Group>
    </Container>
  );
}

export default Header;
