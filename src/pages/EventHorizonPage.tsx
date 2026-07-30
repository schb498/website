import {
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
import ProjectLinkButton from "../components/ProjectLinkButton";

const EVENT_HORIZON_URL = "https://eventhorizonsc.netlify.app/";

const EventHorizonPage = () => {
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
        <Title order={1}>Event Horizon</Title>
        <ProjectLinkButton href={EVENT_HORIZON_URL} />
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
      <List withPadding my="lg">
        <List.Item>
          Track and display recent and upcoming space events, with advanced
          filtering and search capabilities
        </List.Item>
        <List.Item>Display detailed information for each event</List.Item>
        <List.Item>
          Save and add your favourite events into your calendar to track them
        </List.Item>
      </List>
    </Container>
  );
};

export default EventHorizonPage;
