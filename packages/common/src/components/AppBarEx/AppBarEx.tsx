import { AppBar, Container, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { FlexGrowRow, FlexRow } from '@xylabs/react-flexbox'

import { AppBarExProps } from './AppBarExProps'

export const AppBarEx: React.FC<AppBarExProps> = ({ container, ...props }) => {
  const AppBarExInner: React.FC<AppBarExProps> = ({ children, menu, contextToolbar, systemToolbar, responsive, ...props }) => {
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
        {belowSm && children && responsive ? <Toolbar>{children}</Toolbar> : null}
      </>
    )
  }

  return (
    <AppBar position="static" {...props}>
      {container ? (
        <Container maxWidth={container}>
          <AppBarExInner {...props} />
        </Container>
      ) : (
        <AppBarExInner {...props} />
      )}
    </AppBar>
  )
}
