import { Card, Center, Container, SimpleGrid, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Container size="md" style={{ padding: "10px" }}>
        <SimpleGrid cols={3} spacing="lg" style={{ padding: "20px" }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Link to="/pukeko" style={{ textDecoration: "none" }}>
              <Center>
                <Text>Task schedule Visualiser</Text>
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
            <Link to="/table-translator" style={{ textDecoration: "none" }}>
              <Center>
                <Text>Table Translator</Text>
              </Center>
            </Link>
          </Card>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default HomePage;
