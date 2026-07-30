import { Title, Text, Container, List, Flex, ActionIcon } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import ProjectLinkButton from "../components/ProjectLinkButton";
import TcmClip from "../assets/tcm-ai.mp4";

const TCM_AI_URL = "https://tcm-td.netlify.app/";

const TCMAIPage = () => {
  const navigate = useNavigate();

  return (
    <Container size="xl">
      <Flex align="center" gap="sm" mb="md" wrap="wrap">
        <ActionIcon
          variant="subtle"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <MdArrowBack size={22} />
        </ActionIcon>
        <Title order={1}>TCM AI Diagnoser</Title>
        <ProjectLinkButton href={TCM_AI_URL} />
      </Flex>

      <video width="100%" controls style={{ maxWidth: "100%" }}>
        <source src={TcmClip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Text mt="md">
        TCM AI Diagnoser uses AI to generate diagnosis/treatment recommendations
        for patient symptoms based on Traditional Chinese Medicine (TCM)
        principles.
      </Text>

      <Title order={3} mt="xl">
        Key Features
      </Title>
      <List withPadding my="lg">
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
