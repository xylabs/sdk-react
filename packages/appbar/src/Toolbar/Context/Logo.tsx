import { LogoDevOutlined, LogoDevRounded } from '@mui/icons-material'
import type { SvgIconProps } from '@mui/material'
import { useTheme } from '@mui/material'
import React from 'react'

export const Logo: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme()
  return theme.palette.mode === 'dark'
    ? <LogoDevRounded {...props} />
    : <LogoDevOutlined {...props} />
}
