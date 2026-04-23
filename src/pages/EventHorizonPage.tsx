import {
  Anchor,
  AspectRatio,
  Container,
  List,
  Text,
  Title,
  Flex,
  ActionIcon,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const EVENT_HORIZON_URL = "https://eventhorizonsc.netlify.app/";

const EventHorizonPage = () => {
  const navigate = useNavigate();

  return (
    <Container size="xl">
      <Flex align="center" gap="sm" mb="md">
        <ActionIcon variant="subtle" onClick={() => navigate(-1)} aria-label="Back">
          <MdArrowBack size={22} />
        </ActionIcon>
        <Title order={1}>Event Horizon</Title>
      </Flex>

      <AspectRatio ratio={16 / 9} mt="md">
        <iframe
          title="Event Horizon live preview"
          src={EVENT_HORIZON_URL}
          style={{ border: 0, width: "100%", height: "100%" }}
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
        />
      </AspectRatio>

      <Text mt="sm">
        <b>Event Horizon</b> is a space events tracking application that
        aggregates and displays astronomical phenomena including rocket
        launches, eclipses, asteroid close approaches, and other celestial
        events. The platform presents events in an intuitive timeline format
        with filtering, search, and detailed event information.
      </Text>

      <Title order={3} mt="xl">
        Key Features
      </Title>
      <List withPadding my="lg" spacing="sm">
        <List.Item>
          Track and display recent and upcoming space events
        </List.Item>
        <List.Item>Display detailed information for each event</List.Item>
        <List.Item>User accounts and saved events</List.Item>
      </List>

      <Anchor
        href={EVENT_HORIZON_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit the website
      </Anchor>
    </Container>
  );
};

export default EventHorizonPage;
