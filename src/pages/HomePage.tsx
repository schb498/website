import React from "react";
import { Card, Container, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { FaSitemap, FaRocket, FaBrain, FaTable } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { IconType } from "react-icons";

const TbceIcon = ({
  size = 24,
  className,
  style,
}: {
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 100"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="60"
      y="65"
      textAnchor="middle"
      fontSize="44"
      fill="currentColor"
      fontFamily="Open Sans, sans-serif"
    >
      <tspan fontWeight="800">TB</tspan>
      <tspan fontWeight="400">CE</tspan>
    </text>
  </svg>
);

interface Project {
  to: string;
  title: string;
  description: string;
  Icon: IconType;
}

const projects: Project[] = [
  {
    to: "/pukeko",
    title: "Task Schedule Visualiser",
    description:
      "A way to visualise parallel running task schedules and their dependencies. Used for parallel computing research",
    Icon: FaSitemap,
  },
  {
    to: "/event-horizon",
    title: "Event Horizon",
    description:
      "Track space events including rocket launches, eclipses, asteroid approaches, and celestial events",
    Icon: FaRocket,
  },
  {
    to: "/tcm-ai",
    title: "TCM AI Diagnoser",
    description:
      "Uses AI to provide diagnoses and suggested treatments based on Traditional Chinese Medicine principles",
    Icon: FaBrain,
  },
  {
    to: "/tbce",
    title: "Text Bolder Chrome Extension",
    description:
      "Bolds the first half of words to create a powerful, easier-to-read text style. Toggle on any webpage instantly.",
    Icon: TbceIcon as IconType,
  },
  {
    to: "/table-translator",
    title: "Table Translator",
    description:
      "Extracts and translates tabular data from PDF images into structured logic representations.",
    Icon: FaTable,
  },
  {
    to: "/portal-workflow-assistant",
    title: "Portal Workflow Assistant",
    description:
      "Automates patient portal data extraction and ACC claim expiry notifications for a medical clinic",
    Icon: MdMedicalServices,
  },
];

const HomePage = () => {
  return (
    <Container size="xl" py="xl">
      <div
        style={{
          display: "flex",
          gap: "18px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {projects.map((project) => {
          const { Icon } = project;
          return (
            <Link
              key={project.to}
              to={project.to}
              style={{
                textDecoration: "none",
                color: "inherit",
                flex: "1 1 0",
                minWidth: "180px",
                maxWidth: "230px",
              }}
            >
              <Card
                shadow="md"
                radius="lg"
                withBorder
                className="project-card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "36px 20px 32px",
                }}
              >
                <Icon
                  className="card-icon"
                  size={92}
                  style={{ marginBottom: 20 }}
                />

                <Text
                  fw={700}
                  size="md"
                  ta="center"
                  mb={10}
                  lh={1.3}
                  style={{ minHeight: "2.6em", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  {project.title}
                </Text>

                <Text
                  size="sm"
                  c="dimmed"
                  ta="center"
                  lh={1.5}
                  style={{ flex: 1 }}
                >
                  {project.description}
                </Text>
              </Card>
            </Link>
          );
        })}
      </div>

      <style>{`
        .project-card {
          cursor: pointer;
          transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
        }
        .project-card:hover {
          transform: scale(1.05);
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.15);
          border-color: var(--mantine-primary-color-filled) !important;
        }
        .card-icon {
          opacity: 0.5;
          transition: opacity 200ms ease;
        }
        .project-card:hover .card-icon {
          opacity: 0.88;
        }
      `}</style>
    </Container>
  );
};

export default HomePage;
