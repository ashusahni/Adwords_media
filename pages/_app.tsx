import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {
         background: '#FFFFFF',
         text: '#111111',
         primary: '#0072F5',
         secondary: '#9353D3',
         accents1: '#f1f1f1',
         accents2: '#e1e1e1',
         accents3: '#d1d1d1',
         accents4: '#cccccc',
         accents5: '#999999',
         accents6: '#888888',
         accents7: '#666666',
         accents8: '#444444',
      },
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {
         background: '#000000',
         primary: '#0072F5',
         primaryLight: '#5EBCF9',
         primaryDark: '#0045AA',
         secondary: '#9353D3',
         secondaryLight: '#C494FF',
         secondaryDark: '#6020A0',
         text: '#FFFFFF',
         accents1: '#111111',
         accents2: '#222222',
         accents3: '#333333',
         accents4: '#444444',
         accents5: '#666666',
         accents6: '#888888',
         accents7: '#999999',
         accents8: '#AAAAAA',
      },
   },
});

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <NextThemesProvider
         defaultTheme="dark"
         attribute="class"
         value={{
            light: lightTheme.className,
            dark: darkTheme.className,
         }}
      >
         <NextUIProvider>
            <Component {...pageProps} />
         </NextUIProvider>
      </NextThemesProvider>
   );
}

export default MyApp;