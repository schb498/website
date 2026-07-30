import { Container, List, Text, Title, Flex, ActionIcon } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import ProjectLinkButton from "../components/ProjectLinkButton";
import MediaCarousel from "../components/MediaCarousel";
import todayImage from "../assets/next-action-1.png";
import dashboardImage from "../assets/next-action-2.png";

const NEXT_ACTION_URL = "https://next-action-liard.vercel.app/";

const SCREENSHOTS = [
  {
    src: todayImage,
    alt: "Today view recommending 'Project work' as the next action, with time, energy and mood filters above it",
  },
  {
    src: dashboardImage,
    alt: "Dashboard showing goals falling behind this week, weekly stats and a minutes-per-day chart",
  },
];

const NextActionPage = () => {
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
        <Title order={1}>Next Action</Title>
        <ProjectLinkButton href={NEXT_ACTION_URL} />
      </Flex>

      <MediaCarousel media={SCREENSHOTS} />

      <Text mt="md">
        Similar to a to do list, but with the feature of being able to give you a
        next task to do based on your current mood and energy levels. This is a
        work in progress, and will be updated as I continue to develop it.
      </Text>

      <Title order={3} mt="xl">
        Key Features
      </Title>
      <List withPadding my="lg">
        <List.Item>
          Recommends a single next action from your available time, energy and
          mood, with a plain-language reason why
        </List.Item>
        <List.Item>
          Track long-term goals with recurring activities alongside one-off tasks
          and due dates
        </List.Item>
        <List.Item>
          Dashboard of weekly progress, including goals falling behind their
          cadence and tasks needing attention
        </List.Item>
      </List>
    </Container>
  );
};

export default NextActionPage;
