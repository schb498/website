import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "@mantine/core/styles.css";
import { createTheme, Divider, MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PukekoPage from "./pages/PukekoPage";
import TbcePage from "./pages/TbcePage";
import TableTranslatorPage from "./pages/TableTranslatorPage";

function App() {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "teal",
    primaryShade: 8,
  });
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Router>
        <Header />
        <Divider my="md" />
        <Routes>
          <Route path="/website" element={<HomePage />} />
          <Route path="/pukeko" element={<PukekoPage />} />
          <Route path="/tbce" element={<TbcePage />} />
          <Route path="/table-translator" element={<TableTranslatorPage />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
