import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "@mantine/core/styles.css";
import { createTheme, Divider, List, MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PukekoPage from "./pages/PukekoPage";
import EventHorizonPage from "./pages/EventHorizonPage";
import TbcePage from "./pages/TbcePage";
import TableTranslatorPage from "./pages/TableTranslatorPage";
import TCMAIPage from "./pages/TCMAIPage";
import PortalWorkflowAssistantPage from "./pages/PortalWorkflowAssistantPage";
import NextActionPage from "./pages/NextActionPage";

// Slightly stronger borders than Mantine's defaults (gray-3 / dark-4). Applies
// site-wide to Card withBorder, Divider and anything else using the default border.
// Also boosts contrast on Mantine's "dimmed" text token (used for secondary
// copy site-wide) beyond the defaults, which read too faint in both themes.
const borderVariables = () => ({
  variables: {},
  light: {
    "--mantine-color-default-border": "var(--mantine-color-gray-4)",
    "--mantine-color-dimmed": "var(--mantine-color-gray-7)",
  },
  dark: {
    "--mantine-color-default-border": "var(--mantine-color-dark-3)",
    "--mantine-color-dimmed": "var(--mantine-color-dark-0)",
  },
});

function App() {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "teal",
    primaryShade: 8,
    components: {
      // Single place to tune the gap between bullet points site-wide.
      List: List.extend({ defaultProps: { spacing: 6 } }),
    },
  });
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="dark"
      cssVariablesResolver={borderVariables}
    >
      <Router basename="/website">
        <Header />
        <Divider my="md" />
        <div style={{ flex: 1, overflowX: "hidden", paddingBottom: 15 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pukeko" element={<PukekoPage />} />
            <Route path="/event-horizon" element={<EventHorizonPage />} />
            <Route path="/tcm-ai" element={<TCMAIPage />} />
            <Route path="/tbce" element={<TbcePage />} />
            <Route path="/table-translator" element={<TableTranslatorPage />} />
            <Route
              path="/portal-workflow-assistant"
              element={<PortalWorkflowAssistantPage />}
            />
            <Route path="/next-action" element={<NextActionPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </MantineProvider>
  );
}

export default App;
