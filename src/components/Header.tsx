import { Container, useMantineTheme, Text } from "@mantine/core";

function Header() {
  const theme = useMantineTheme();

  return (
    <Container
      size="full"
      style={{
        backgroundColor: theme.colors.blue[2],
        padding: "10px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <Text ta="center" size="xl" fw={700}>
        Project Demo
      </Text>
    </Container>
  );
}

export default Header;
