import { LogoDevOutlined, LogoDevRounded } from '@mui/icons-material'
import type { SvgIconProps } from '@mui/material'
import { useIsDark } from '@xylabs/react-theme'
import React from 'react'

export const Logo: React.FC<SvgIconProps> = (props) => {
  const dark = useIsDark()
  return dark
    ? <LogoDevRounded {...props} />
    : <LogoDevOutlined {...props} />
}
