import { Box } from '@mantine/core';
import { Logo } from '../Logo';
import { RepositoryLink } from '../RepositoryLink';

export function Header() {
  return (
    <Box
      component="header"
      sx={({ colors }) => ({
        background: colors.gray[9],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      })}
    >
      <Box
        component="nav"
        sx={({ spacing, shadows }) => ({
          paddingBlock: spacing.sm,
          paddingInline: spacing.md,
          width: '100%',
          maxWidth: 960,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: shadows.sm
        })}
      >
        <Logo />

        <RepositoryLink />
      </Box>
    </Box>
  );
}
