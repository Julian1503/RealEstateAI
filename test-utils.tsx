import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@components/core/Theme/ThemeContext';
import { ThemeContext, ThemeMode } from '@components/core/Theme/Theme.types';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/theme/theme';

// Custom render function that includes providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  themeMode?: ThemeMode;
}

export function renderWithProviders(
  ui: ReactElement,
  { themeMode = 'dark', ...renderOptions }: CustomRenderOptions = {}
) {
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;
  
  // Mock theme context value
  const themeContextValue = {
    mode: themeMode,
    toggleTheme: jest.fn(),
  };

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <MuiThemeProvider theme={theme}>
          {children}
        </MuiThemeProvider>
      </ThemeContext.Provider>
    );
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    // Return additional helper functions or mocked values if needed
    mockThemeToggle: themeContextValue.toggleTheme,
  };
}

// Re-export everything from testing-library
export * from '@testing-library/react';
export { renderWithProviders as render };