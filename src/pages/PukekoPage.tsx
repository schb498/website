import { Title, Text, Container, List } from "@mantine/core";
import pukekoClip from "../assets/pukeko2.mp4";

const PukekoPage = () => {
  return (
    <Container>
      <Title order={1} p={10}>
        Pukeko - Task Scheduling Editor
      </Title>

      <video width="100%" controls>
        <source src={pukekoClip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Text mt="md">
        This project, Pukeko, is a task scheduling editor designed to streamline
        and manage tasks efficiently. The video above demonstrates the key
        features and functionality of the project.
      </Text>

      <Title order={3} mt="xl" align="left">
        Key Features
      </Title>
      <List withPadding mt="sm" spacing="md" align="left">
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
