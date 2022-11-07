import { Button, useTheme } from '@mui/material'
import { BusyCircularProgress, BusyLinearProgress, mergeBoxlikeStyles } from '@xylabs/react-shared'
import { forwardRef, MouseEvent } from 'react'

import { ButtonExProps } from './ButtonExProps'

const ButtonExBase = forwardRef<HTMLButtonElement, ButtonExProps>((props, ref) => {
  const theme = useTheme()
  const { busy, busyVariant = 'linear', busyOpacity, onClick, children, ...rootProps } = mergeBoxlikeStyles<ButtonExProps>(theme, props)

  const localOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!busy) {
      onClick?.(event)
    }
  }

  return (
    <Button ref={ref} onClick={localOnClick} {...rootProps}>
      {busy && busyVariant === 'linear' ? <BusyLinearProgress rounded opacity={busyOpacity ?? 0} /> : null}
      {busy && busyVariant === 'circular' ? <BusyCircularProgress rounded size={24} opacity={busyOpacity ?? 0.5} /> : null}
      {children}
    </Button>
  )
})

ButtonExBase.displayName = 'ButtonExBaseXYLabs'

export { ButtonExBase }
