import type { ReactElement } from 'react';
import React from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render as rtlRender } from '@testing-library/react';
import { I18TranslationProvider } from '@/lib/i18n';
import { ThemeProvider } from '@/components/theme';

import userEvent from '@testing-library/user-event';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <I18TranslationProvider>
    <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
  </I18TranslationProvider>
);

// Wrapp render with global providers used needed in in the app, like theme, i18n, store ...
const render = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  rtlRender(ui, { wrapper: AppProviders, ...options });

export * from '@testing-library/react';

// setup user events (mouse, keyboard ...)
const user = userEvent.setup();

export { rtlRender, render, user };
