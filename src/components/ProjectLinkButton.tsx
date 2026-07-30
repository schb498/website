import { Button } from "@mantine/core";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

type ProjectLinkButtonProps = {
  href: string;
  /** "website" links to the live project, "repo" links to its GitHub repository. */
  kind?: "website" | "repo";
};

const ProjectLinkButton = ({ href, kind = "website" }: ProjectLinkButtonProps) => {
  const isRepo = kind === "repo";

  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      leftSection={isRepo ? <FaGithub size={18} /> : <MdOpenInNew size={18} />}
      ml="auto"
    >
      {isRepo ? "View the code" : "Visit the website"}
    </Button>
  );
};

export default ProjectLinkButton;
