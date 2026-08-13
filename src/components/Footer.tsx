import { Container, Divider, Group, Text, ActionIcon } from "@mantine/core";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const GITHUB_URL = "https://github.com/schb498";
const LINKEDIN_URL = "https://linkedin.com/in/shiangbo-chang";
const EMAIL = "shiangbo.chang@gmail.com";
const PHONE = "+64 22 130 5943";

function Footer() {
  return (
    <Container fluid style={{ padding: "6px 24px 10px" }}>
      <Group justify="center" gap="lg">
        <ActionIcon
          component="a"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="subtle"
          size="lg"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </ActionIcon>
        <ActionIcon
          component="a"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="subtle"
          size="lg"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </ActionIcon>
        <Group gap={6} wrap="nowrap">
          <MdEmail size={18} />
          <Text
            component="a"
            href={`mailto:${EMAIL}`}
            size="sm"
            c="inherit"
            style={{ textDecoration: "none" }}
          >
            {EMAIL}
          </Text>
        </Group>
        <Group gap={6} wrap="nowrap">
          <MdPhone size={18} />
          <Text
            component="a"
            href={`tel:${PHONE.replace(/\s+/g, "")}`}
            size="sm"
            c="inherit"
            style={{ textDecoration: "none" }}
          >
            {PHONE}
          </Text>
        </Group>
      </Group>
    </Container>
  );
}

export default Footer;
