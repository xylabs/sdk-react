import type { Theme } from '@mui/material'

export const MuiLinkFragment: Theme['components'] = {
  MuiLink: {
  // default color prop is required because Mui passes 'primary' as the default color prop and overrides
  // color: 'inherit' in their own css
    defaultProps: {
      color: 'inherit', underline: 'none', fontWeight: 600,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        'opacity': 0.45,
        '&:hover': { opacity: 0.8 },
        // Dark mode needs to be more opaque to be readable because the background is darker
        ...theme.applyStyles('dark', { opacity: 0.6 }),
      }),
    },
  },
}
