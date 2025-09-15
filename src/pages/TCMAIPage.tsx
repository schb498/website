import { Title, Text, Container, List, Anchor } from "@mantine/core";
import TcmClip from "../assets/tcm-ai.mp4";

const TCMAIPage = () => {
  return (
    <Container size="xl">
      <Title order={1} p={10}>
        TCM AI Diagnoser
      </Title>

      <video width="100%" controls>
        <source src={TcmClip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Text mt="md">
        TCM AI Diagnoser uses AI to generate diagnosis/treatment recommendations
        for patient symptoms based on Traditional Chinese Medicine (TCM)
        principles.
      </Text>

      <Anchor
        href="https://tcm-td.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Try it here
      </Anchor>

      <Title order={3} mt="xl">
        Key Features
      </Title>
      <List withPadding my="lg" spacing="sm">
        <List.Item>Comprehensive form for inputting patient details</List.Item>
        <List.Item>
          Save and view features for generated treatment results
        </List.Item>
        <List.Item>
          Custom management of medicine based on your inventory
        </List.Item>
      </List>
    </Container>
  );
};

export default TCMAIPage;
