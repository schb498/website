import { Title, Text, Container, List, Flex, ActionIcon } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import ProjectLinkButton from "../components/ProjectLinkButton";
import MediaCarousel from "../components/MediaCarousel";
import tbceImage from "../assets/tbce.png";
import tbceClip from "../assets/tbce.mp4";

const TBCE_REPO_URL = "https://github.com/schb498/ReadFasterChromeExtension";

const MEDIA = [
  {
    src: tbceImage,
    alt: "Extension popup with boldness and dimness controls beside a webpage of half-bolded text",
  },
  {
    src: tbceClip,
    alt: "Demo of the bolding effect being toggled and adjusted on a webpage",
    type: "video" as const,
  },
];

const TbcePage = () => {
  const navigate = useNavigate();

  return (
    <Container size="xl">
      <Flex align="center" gap="sm" mb="md" wrap="wrap">
        <ActionIcon variant="subtle" onClick={() => navigate(-1)} aria-label="Back">
          <MdArrowBack size={22} />
        </ActionIcon>
        <Title order={1}>Text Bolder Chrome Extension</Title>
        <ProjectLinkButton href={TBCE_REPO_URL} kind="repo" />
      </Flex>

      <MediaCarousel media={MEDIA} />

      <Text mt="md">
        This Chrome extension enhances your reading experience by bolding the
        first half of each word on any webpage, allowing for faster reading and
        improved focus.
      </Text>

      <Title order={3} mt="xl">
        Key Features
      </Title>
      <List withPadding my="lg">
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
