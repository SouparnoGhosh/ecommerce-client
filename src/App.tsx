// src/App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import SettingsPage from "@/SettingsPage";
import { useTheme } from "@/hooks/useTheme";
import {
  menswearSections,
  womenswearSections,
} from "./components/utils/constants";

const App = () => {
  useTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              menswearSections={menswearSections}
              womenswearSections={womenswearSections}
            />
          }
        />
        <Route path="/profile" element={<SettingsPage />} />
        {/* Catch-all route to redirect to homepage */}
        <Route
          path="*"
          element={
            <Homepage
              menswearSections={menswearSections}
              womenswearSections={womenswearSections}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;