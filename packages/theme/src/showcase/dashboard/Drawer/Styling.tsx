import { Drawer } from '@mui/material'
import type { CSSObject, Theme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'

export const sideDrawerWidth = 240

export const openedDrawerMixin = (theme: Theme): CSSObject => ({
  width: sideDrawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

export const closedDrawerMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: { width: `calc(${theme.spacing(8)} + 1px)` },
})

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
