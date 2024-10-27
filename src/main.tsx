import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { I18TranslationProvider } from '@/lib/i18n';
import { ThemeProvider } from '@/components/theme';

import { routeTree } from './routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const app = createRoot(document.getElementById('root')!);
app.render(
  <StrictMode>
    <I18TranslationProvider>
      <ThemeProvider defaultTheme='system'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </I18TranslationProvider>
  </StrictMode>
);
