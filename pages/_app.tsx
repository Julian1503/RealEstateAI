import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@components/core/Theme/ThemeContext';
import type {AppProps} from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}