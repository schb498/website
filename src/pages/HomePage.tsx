import { Card, Center, SimpleGrid, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <SimpleGrid cols={3} spacing="lg" style={{ padding: "20px" }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Link to="/pukeko" style={{ textDecoration: "none" }}>
            <Center>
              <Text>Pukeko</Text>
            </Center>
          </Link>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Link to="/tbce" style={{ textDecoration: "none" }}>
            <Center>
              <Text>TBCE</Text>
            </Center>
          </Link>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Center>
              <Text>Project 3</Text>
            </Center>
          </Link>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default HomePage;
