import {
  AppBar, Container, Toolbar, useMediaQuery, useTheme,
} from '@mui/material'
import { FlexGrowRow, FlexRow } from '@xylabs/react-flexbox'
import React from 'react'

import type { AppBarExProps } from './AppBarExProps.tsx'

const AppBarExInner: React.FC<AppBarExProps> = ({
  children, menu, contextToolbar, systemToolbar, responsive, ...props
}) => {
  const { breakpoints } = useTheme()
  const belowSm = useMediaQuery(breakpoints.down('sm'))
  return (
    <>
      <FlexRow flexWrap="nowrap" justifyContent="flex-start" {...props}>
        {contextToolbar ?? <Toolbar />}
        <FlexGrowRow>{belowSm && responsive ? null : children}</FlexGrowRow>
        {systemToolbar ?? <Toolbar />}
        {menu}
      </FlexRow>
      {belowSm && children && responsive
        ? <Toolbar>{children}</Toolbar>
        : null}
    </>
  )
}

export const AppBarEx: React.FC<AppBarExProps> = ({
  container, children, menu, contextToolbar, systemToolbar, responsive, ...props
}) => {
  return (
    <AppBar position="static" {...props}>
      {container
        ? (
            <Container maxWidth={container}>
              <AppBarExInner {...{
                children, contextToolbar, menu, responsive, systemToolbar,
              }}
              />
            </Container>
          )
        : (
            <AppBarExInner {...{
              children, contextToolbar, menu, responsive, systemToolbar,
            }}
            />
          )}
    </AppBar>
  )
}
