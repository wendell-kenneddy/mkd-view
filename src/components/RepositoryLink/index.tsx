import { Anchor } from '@mantine/core';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export function RepositoryLink() {
  return (
    <Link href="https://github.com/wendell-kenneddy/mkd-view" passHref>
      <Anchor
        sx={() => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        })}
      >
        <FaGithub color="#fff" fontSize={24} />
      </Anchor>
    </Link>
  );
}
