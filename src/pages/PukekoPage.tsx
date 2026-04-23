import { Title, Text, Container, List, Flex, ActionIcon } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import pukekoClip from "../assets/pukeko2.mp4";

const PukekoPage = () => {
  const navigate = useNavigate();

  return (
    <Container size="xl">
      <Flex align="center" gap="sm" mb="md">
        <ActionIcon variant="subtle" onClick={() => navigate(-1)} aria-label="Back">
          <MdArrowBack size={22} />
        </ActionIcon>
        <Title order={1}>Pukeko - Task Scheduling Visualiser</Title>
      </Flex>

      <video width="100%" controls style={{ maxWidth: "100%" }}>
        <source src={pukekoClip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Text mt="md">
        Pukeko is an application for visualising sample schedules used for
        computer processors in parallel computing. The video below demonstrates
        the key features and functionality of the project.
      </Text>

      <Title order={3} mt="xl">
        Key Features
      </Title>
      <List withPadding my="lg" spacing="sm">
        <List.Item>Loading/storing task schedules (GXL format)</List.Item>
        <List.Item>Visualising schedules</List.Item>
        <List.Item>Visualising task dependency graphs/DAGs</List.Item>
        <List.Item>
          Visual relations between schedule and task dependencies
        </List.Item>
        <List.Item>
          Several built-in schedulers, and the ability to compose schedulers
          from a selected range of scheduler components
        </List.Item>
        <List.Item>
          Support for manual schedule task reallocation - task insertion,
          append, squeeze actions
        </List.Item>
        <List.Item>
          Adding/removing tasks, nodes, edges, and processors
        </List.Item>
        <List.Item>Node duplication onto other processors</List.Item>
        <List.Item>Manual editing of node/edge values</List.Item>
        <List.Item>
          Ability to export and save schedules as GXL, SVG, and EPS files
        </List.Item>
        <List.Item>Example schedules and graphs</List.Item>
      </List>
    </Container>
  );
};

export default PukekoPage;
