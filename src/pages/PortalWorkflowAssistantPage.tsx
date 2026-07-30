import { Title, Text, Container, List, Flex, ActionIcon } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import MediaCarousel from "../components/MediaCarousel";
import manaToolsImage from "../assets/ManaTools.png";
import accNotificationsImage from "../assets/ACC-notifications-manager.png";

const SCREENSHOTS = [
  {
    src: manaToolsImage,
    alt: "ManaTools patient list with Google Contacts sync status",
  },
  {
    src: accNotificationsImage,
    alt: "ACC Notifications Manager showing claim expiry dates and scheduled SMS reminders",
  },
];

const PortalWorkflowAssistantPage = () => {
  const navigate = useNavigate();

  return (
    <Container size="xl">
      <Flex align="center" gap="sm" mb="md">
        <ActionIcon
          variant="subtle"
          onClick={() => navigate(-1)}
          aria-label="Back"
        >
          <MdArrowBack size={22} />
        </ActionIcon>
        <Title order={1}>Portal Workflow Assistant</Title>
      </Flex>

      <MediaCarousel media={SCREENSHOTS} />

      <Text mt="md">
        Two webpages + Chrome extension built as a private internal toolset for
        a medical clinic, automating patient data extraction from their practice
        management portal into Google Contacts, and tracking ACC (Accident
        Compensation Corporation) claim expiry with SMS notification scheduling.
      </Text>

      <Title order={3} mt="xl">
        Key Features
      </Title>
      <List withPadding my="lg">
        <List.Item>
          Features two main tools: 'ManaTools' for patient data extraction and
          'ACC Notifications Manager' for tracking ACC claim expiry and
          scheduling reminders to the patients.
        </List.Item>
        <List.Item>
          ManaTools - Patient data from the clinic's webportal can be
          synchronised to their phone by connecting to Google Contacts.
        </List.Item>
        <List.Item>
          ACC Notifications Manager - Set customised SMS reminders for patients
          with expiring claims.
        </List.Item>
        <List.Item>
          A custom Chrome extension is used to extract patient data from the
          clinic's webportal, which can be sent to the ACC Notifications
          Manager.
        </List.Item>
      </List>
    </Container>
  );
};

export default PortalWorkflowAssistantPage;
