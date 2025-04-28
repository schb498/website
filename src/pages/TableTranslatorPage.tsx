import { Title, Text, Container, List, Image } from "@mantine/core";
import exampleTableImage from "../assets/table-translator.jpg";
import webpageImage from "../assets/table-example.jpg";

const TbcePage = () => {
  return (
    <Container size="xl">
      <Title order={1} p={10}>
        PDF Table Translator
      </Title>

      <Container size="xs" my="md">
        <Image src={webpageImage} alt="Table example" />
      </Container>

      <Image
        src={exampleTableImage}
        alt="PDF Table Translator Preview"
        width="100%"
        style={{
          border: "1px solid lightgray",
        }}
      />

      <Text mt="md">
        This web application translates tables within PDF documents into logical
        representations used for automated logic rule processing.
      </Text>

      <Title order={3} mt="xl">
        Key Features
      </Title>
      <List withPadding my="lg" spacing="sm">
        <List.Item>
          Upload images containing tables for table translation processing.
          Supply additional table context for higher accuracy in table
          interpretation.
        </List.Item>
        <List.Item>
          Table translation process uses image processing methods to extract
          table structure and text from images.
        </List.Item>
        <List.Item>
          Generates logic rules representing the tabular data.
        </List.Item>
      </List>
    </Container>
  );
};

export default TbcePage;
