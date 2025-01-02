import { Drawer } from '@mui/material'
import { styled } from '@mui/material/styles'

import { closedDrawerMixin, openedDrawerMixin } from './StylingMixin.ts'

export const sideDrawerWidth = 240

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

export const StyledDrawer = styled(Drawer, { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme }) => ({
    width: sideDrawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedDrawerMixin(theme),
          '& .MuiDrawer-paper': openedDrawerMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedDrawerMixin(theme),
          '& .MuiDrawer-paper': closedDrawerMixin(theme),
        },
      },
    ],
  }),
)
