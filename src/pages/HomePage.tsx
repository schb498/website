import { Card, Center, Container, SimpleGrid, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const HomePage = () => {
  const cardStyle = {
    borderWidth: "2px",
    transition: "box-shadow 150ms ease",
  };

  const hoverStyle = {
    transform: "scale(1.03)",
  };

  return (
    <div>
      <Container size="md" style={{ padding: "10px" }}>
        <SimpleGrid cols={3} spacing="lg" style={{ padding: "20px" }}>
          <Link
            to="/pukeko"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={cardStyle}
              className="hover-card"
            >
              <Center>
                <Text>Task schedule Visualiser</Text>
              </Center>
            </Card>
          </Link>

          <Link
            to="/tcm-ai"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={cardStyle}
              className="hover-card"
            >
              <Center>
                <Text>TCM AI Diagnoser</Text>
              </Center>
            </Card>
          </Link>

          <Link to="/tbce" style={{ textDecoration: "none", color: "inherit" }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={cardStyle}
              className="hover-card"
            >
              <Center>
                <Text>TBCE</Text>
              </Center>
            </Card>
          </Link>

          <Link
            to="/table-translator"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={cardStyle}
              className="hover-card"
            >
              <Center>
                <Text>Table Translator</Text>
              </Center>
            </Card>
          </Link>
        </SimpleGrid>
      </Container>

      <style>
        {`
          .hover-card:hover {
            transform: ${hoverStyle.transform};
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
