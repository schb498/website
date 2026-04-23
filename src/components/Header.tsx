import {
  Container,
  ActionIcon,
  useMantineColorScheme,
  Title,
  Flex,
  Group,
  Stack,
  Text,
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
      fluid
      style={{ padding: "20px 24px 8px", top: 0, zIndex: 1000 }}
    >
      <Flex justify="space-between" align="center">
        <div style={{ width: "72px" }} />

        <Stack align="center" gap={4} style={{ flexGrow: 1 }}>
          <Title
            order={1}
            ta="center"
            style={{
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Project Showcase
          </Title>
          <Text
            size="md"
            c="dimmed"
            fw={500}
            ta="center"
            style={{ letterSpacing: "0.04em" }}
          >
            Shiangbo Chang
          </Text>
        </Stack>

        <Group gap="sm" align="flex-start">
          <ActionIcon
            variant="subtle"
            component={Link}
            to="/"
            size="lg"
            aria-label="Home"
          >
            <HiHome size={30} />
          </ActionIcon>

          <ActionIcon
            variant="subtle"
            onClick={toggleColorScheme}
            size="lg"
            aria-label="Toggle theme"
          >
            {colorScheme === "light" ? (
              <MdDarkMode size={30} />
            ) : (
              <MdOutlineLightMode size={30} />
            )}
          </ActionIcon>
        </Group>
      </Flex>
    </Container>
  );
}

export default Header;
