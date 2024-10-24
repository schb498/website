import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import HomePage from "./pages/HomePage";
import PukekoPage from "./pages/PukekoPage";
import Header from "./components/Header";

function App() {
  return (
    <MantineProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pukeko" element={<PukekoPage />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
