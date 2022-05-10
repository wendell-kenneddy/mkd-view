import { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { Header } from '../components/Header';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: 'dark', fontFamily: 'Roboto, sans-serif' }}
      >
        <NotificationsProvider>
          <Header />

          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
