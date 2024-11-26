import { MenuRounded } from '@mui/icons-material'
import type { BoxProps, CSSObject } from '@mui/material'
import {
  AppBar as MuiAppBar,
  Box,
  CssBaseline,
  IconButton,
  styled,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import { FlexRow } from '@xylabs/react-flexbox'
import type { ReactNode } from 'react'
import React, { useState } from 'react'
import {
  Navigate, Route, Routes,
} from 'react-router-dom'

import type { DrawerMenuItem } from '../../Drawer/index.ts'
import { MiniDrawer } from '../../Drawer/index.ts'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, { shouldForwardProp: prop => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export interface AppPageProps {
  menuItem: DrawerMenuItem & { path: string }
  pageContent: ReactNode
}

export interface AppChromeProps extends BoxProps {
  items: AppPageProps[]
}

export const AppChrome: React.FC<AppChromeProps> = ({ items }) => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const handleDrawerOpen = () => setOpen(true)

  // Extract menu items for the drawer
  const menuItems = items.map(({ menuItem }) => menuItem)

  // Get the path of the first item to use as the default route
  const defaultPath = menuItems[0].path

  const dockedDrawerWidth = (theme.components?.MuiDrawer?.styleOverrides?.docked as CSSObject)?.width || '96px'

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar disableGutters>
          <FlexRow gap={2} justifyItems="center" width={dockedDrawerWidth} paddingLeft="6px">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={[
                open && { display: 'none' },
              ]}
            >
              <MenuRounded />
            </IconButton>
          </FlexRow>
          <FlexRow paddingX={2}>
            <Typography variant="h6" noWrap component="div">
              XYO Explorer
            </Typography>
          </FlexRow>
        </Toolbar>
      </AppBar>
      <MiniDrawer menuItems={menuItems} openHandler={setOpen} open={open} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <Routes>
          <Route path="*" element={<Navigate to={defaultPath} replace />} />
          {items.map(({ menuItem, pageContent }) => (
            <Route
              key={menuItem.path}
              path={menuItem.path}
              element={<>{pageContent}</>}
            />
          ))}
        </Routes>
      </Box>
    </Box>
  )
}
