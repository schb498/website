import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "@mantine/core/styles.css";
import { createTheme, Divider, MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PukekoPage from "./pages/PukekoPage";
import EventHorizonPage from "./pages/EventHorizonPage";
import TbcePage from "./pages/TbcePage";
import TableTranslatorPage from "./pages/TableTranslatorPage";
import TCMAIPage from "./pages/TCMAIPage";
import PortalWorkflowAssistantPage from "./pages/PortalWorkflowAssistantPage";

function App() {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "teal",
    primaryShade: 8,
  });
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Router basename="/website">
        <Header />
        <Divider my="md" />
        <div style={{ overflowX: "hidden", paddingBottom: 15 }}>
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
          </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
