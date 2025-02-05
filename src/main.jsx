import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contextAPI/ThemeContext.jsx";
import { LanguageProvider } from "./contextAPI/LanguageContext.jsx";
import { UserProvider } from "./contextAPI/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider>
      <LanguageProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  </>
);
