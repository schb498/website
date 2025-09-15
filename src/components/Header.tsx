import {
  Container,
  Button,
  useMantineColorScheme,
  Title,
  Flex,
  Group,
} from "@mantine/core";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
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
      <Flex justify="space-between" align="center">
        <div style={{ width: "80px" }} />
        <Title order={1} ta="center" style={{ flexGrow: 1 }}>
          Project Showcase
        </Title>

        <Group>
          <Button
            variant="outline"
            component={Link}
            to="/"
            style={{ marginRight: "10px" }}
          >
            <HiHome size={18} />
          </Button>
          <Button onClick={toggleColorScheme} variant="outline">
            {colorScheme === "light" ? (
              <MdDarkMode size={18} />
            ) : (
              <MdOutlineLightMode size={18} />
            )}
          </Button>
        </Group>
      </Flex>
    </Container>
  );
}

export default Header;
