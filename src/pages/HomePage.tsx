import { Card, Center, SimpleGrid, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <SimpleGrid cols={3} spacing="lg" style={{ padding: "20px" }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Link to="/pukeko" style={{ textDecoration: "none" }}>
            <Center>
              <Text>Pukeko Page</Text>
            </Center>
          </Link>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Center>
              <Text>Other Page</Text>
            </Center>
          </Link>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Center>
              <Text>Other Page</Text>
            </Center>
          </Link>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default HomePage;
