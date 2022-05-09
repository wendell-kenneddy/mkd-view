import { Container, Title } from '@mantine/core';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>MKDview | Page not found</title>
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
            Page not found :(
          </Title>

          <Image
            src="/adventure-illustration.svg"
            alt="Adventure illustration"
            width={220}
            height={150}
          />
        </Container>
      </main>
    </>
  );
}
