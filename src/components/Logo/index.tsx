import { Anchor } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" passHref>
      <Anchor
        sx={() => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        })}
      >
        <Image src="/logo.svg" alt="Logo" width={77} height={16} />
      </Anchor>
    </Link>
  );
}
