import { Container } from '@mantine/core';
import Head from 'next/head';
import { Tabs } from '../components/Tabs';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="A simple Markdown editor." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MKDview" />
        <meta property="og:site_name" content="MKDview" />
        <meta property="og:description" content="A simple Markdown editor." />
        <meta property="og:url" content="https://mkdview.vercel.app/" />
        <meta property="og:locale" content="en-US" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="MKDview" />
        <meta
          property="twitter:description"
          content="A simple Markdown editor."
        />
        <meta property="twitter:url" content="https://mkdview.vercel.app/" />
        <title>MKDview</title>
        <link rel="canonical" href="https://mkdview.vercel.app/" />
      </Head>

      <main>
        <Container
          size="md"
          sx={({ spacing }) => ({
            marginTop: spacing.xl
          })}
        >
          <Tabs />
        </Container>
      </main>
    </>
  );
}
