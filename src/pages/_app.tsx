import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import myTheme from '../styles/MyTheme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={myTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
