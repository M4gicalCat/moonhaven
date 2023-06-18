import type { AppProps } from 'next/app';
import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from 'styled-components';
import { lightTheme } from '@/themes/light';
import { darkTheme } from '@/themes/dark';
import { useEffect, useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.text.primary};
  }
`;

const availableThemes: Record<string, DefaultTheme> = {};
for (const theme of [lightTheme, darkTheme]) {
  availableThemes[theme.name] = theme;
}

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>(lightTheme.name);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={availableThemes[theme]}>
        <GlobalStyle />
        <Component {...pageProps} setTheme={setTheme} theme={theme} />
      </ThemeProvider>
    </>
  );
}
