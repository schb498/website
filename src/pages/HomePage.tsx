import { Card, Container, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { FaSitemap, FaRocket, FaBrain, FaTable } from "react-icons/fa";
import { MdFormatBold } from "react-icons/md";
import { IconType } from "react-icons";

interface Project {
  to: string;
  title: string;
  description: string;
  Icon: IconType;
}

const projects: Project[] = [
  {
    to: "/pukeko",
    title: "Task Scheduler Visualiser",
    description:
      "Generates Gantt charts to visualise parallel processor schedules and task dependencies across processors.",
    Icon: FaSitemap,
  },
  {
    to: "/event-horizon",
    title: "Event Horizon",
    description:
      "An interactive space events tracker. Explore rocket launches, eclipses, asteroid approaches, and celestial events.",
    Icon: FaRocket,
  },
  {
    to: "/tcm-ai",
    title: "AI TCM Diagnoser",
    description:
      "Applies TCM principles via AI to generate herbal prescriptions, acupuncture plans, and lifestyle treatments based on symptom analysis.",
    Icon: FaBrain,
  },
  {
    to: "/tbce",
    title: "TBCE",
    description:
      "Bolds the first half of words to create a powerful, easier-to-read text style. Toggle on any webpage instantly.",
    Icon: MdFormatBold,
  },
  {
    to: "/table-translator",
    title: "Table Translator",
    description:
      "Efficiently extracts and translates tabular data from PDF images into structured logic representations.",
    Icon: FaTable,
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

                <Text fw={700} size="md" ta="center" mb={10} lh={1.3}>
                  {project.title}
                </Text>

                <Text size="sm" c="dimmed" ta="center" lh={1.5}>
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
