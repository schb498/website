import { Title, Text, Container, List } from "@mantine/core";
import btceClip from "../assets/btce.mp4";

const TbcePage = () => {
  return (
    <Container size="xl">
      <Title order={1} p={10}>
        Text Bolder Chrome Extension
      </Title>

      <video width="100%" controls>
        <source src={btceClip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Text mt="md">
        This Chrome extension enhances your reading experience by bolding the
        first half of each word on any webpage, allowing for faster reading and
        improved focus.
      </Text>

      <Title order={3} mt="xl">
        Key Features
      </Title>
      <List withPadding my="lg" spacing="sm">
        <List.Item>
          Toggle Bolding: Easily switch the bolding effect on and off for the
          current webpage.
        </List.Item>
        <List.Item>
          Adjustable Bolding: Customize how text is displayed by increasing the
          font weight of the first half of words while decreasing the weight of
          the remaining letters.
        </List.Item>
      </List>
    </Container>
  );
};

export default TbcePage;
