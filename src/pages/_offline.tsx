import { Container, Title } from '@mantine/core';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MKDview | Offline</title>
      </Head>

      <main>
        <Container
          size="md"
          sx={({ spacing }) => ({
            marginTop: spacing.xl,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          })}
        >
          <Title mb="lg" order={2}>
            Offline at the moment :(
          </Title>
        </Container>
      </main>
    </>
  );
}
