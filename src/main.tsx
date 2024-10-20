import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { I18TranslationProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/components/theme-provider";
import Login from "@/pages/login";

const app = createRoot(document.getElementById("root")!);
app.render(
  <StrictMode>
    <I18TranslationProvider>
      <ThemeProvider defaultTheme="system">
        <Login />
      </ThemeProvider>
    </I18TranslationProvider>
  </StrictMode>
);
