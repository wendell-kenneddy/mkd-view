import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { Header } from '../components/Header';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: 'dark', fontFamily: 'Roboto, sans-serif' }}
      >
        <Header />

        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
