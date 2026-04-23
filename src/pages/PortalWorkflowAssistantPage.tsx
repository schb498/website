import { Title, Text, Container, List, Flex, ActionIcon } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

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

      <Flex
        align="center"
        justify="center"
        style={{
          width: "100%",
          height: 240,
          borderRadius: 8,
          border: "2px dashed var(--mantine-color-dimmed)",
          color: "var(--mantine-color-dimmed)",
        }}
      >
        <Text size="sm" c="dimmed">
          Media to be added
        </Text>
      </Flex>

      <Text mt="md">
        A Chrome extension + standalone webpage built as a private internal tool
        for a medical clinic, automating patient data extraction from their
        practice management portal into Google Contacts, and tracking ACC
        (Accident Compensation Corporation) claim expiry with SMS notification
        scheduling.
      </Text>

      <Title order={3} mt="xl">
        Key Features
      </Title>
      <List withPadding my="lg" spacing="sm">
        <List.Item>
          Chrome extension popup combined with a custom standalone notifications
          manager webpage.
        </List.Item>
        <List.Item>
          DOM data extraction from the clinic's patient management portal.
        </List.Item>
        <List.Item>
          Patient data exported directly to practitioner's Google Contacts via a
          custom Google Apps Script, with CSV download as a fallback.
        </List.Item>
        <List.Item>
          SMS reminder notification scheduling using ACC injury claim data
          fetched from the portal.
        </List.Item>
      </List>
    </Container>
  );
};

export default PortalWorkflowAssistantPage;
