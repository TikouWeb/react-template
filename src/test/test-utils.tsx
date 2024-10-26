/* eslint-disable react-refresh/only-export-components */

import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { I18TranslationProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/components/theme-provider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <I18TranslationProvider>
      <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
    </I18TranslationProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AppProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
