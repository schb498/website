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

const NEXT_ACTION_URL = "https://next-action-liard.vercel.app/";

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

      <AspectRatio ratio={16 / 9} mt="md">
        <iframe
          title="Next Action live preview"
          src={NEXT_ACTION_URL}
          style={{ border: 0, width: "100%", height: "100%" }}
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts"
        />
      </AspectRatio>

      <Text mt="sm">
        Similar to a to do list, but with the feature of being able to give you a
        next task to do based on your current mood and energy levels. This is a
        work in progress, and will be updated as I continue to develop it.
      </Text>

      <Title order={3} mt="xl">
        Key Features
      </Title>
      <List withPadding my="lg" spacing="sm">
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
