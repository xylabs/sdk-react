import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import type { IconButtonProps } from '@mui/material'
import { IconButton } from '@mui/material'
import { RotationAnimation } from '@xylabs/react-animation'
import { FlexCol } from '@xylabs/react-flexbox'
import React, { useState } from 'react'

type IconColor = IconButtonProps['color']

interface DefaultModeColors {
  defaultDarkModeColor?: IconButtonProps['color']
  defaultLightModeColor?: IconButtonProps['color']
}

export interface DarkModeIconButtonProps extends IconButtonProps, DefaultModeColors {
  darkMode?: boolean
  toggleMode?: () => void
}

export const DarkModeIconButton: React.FC<DarkModeIconButtonProps> = ({
  darkMode,
  defaultDarkModeColor,
  defaultLightModeColor,
  toggleMode,
  ...props
}) => {
  const [iconColor, setIconColor] = useState<IconColor>(darkMode ? defaultDarkModeColor : defaultLightModeColor)
  const [iconColorIsSet, setIconColorIsSet] = useState(false)

  const handleHover = () => {
    setIconColor(() => {
      const darkModeIconColor = defaultDarkModeColor ?? 'inherit'
      const lightModeIconColor = defaultLightModeColor ?? 'inherit'
      if (darkMode) {
        return iconColorIsSet ? darkModeIconColor : 'info'
      } else {
        return iconColorIsSet ? lightModeIconColor : 'warning'
      }
    })
    setIconColorIsSet(!iconColorIsSet)
  }

  const handleDarkModeChange = () => {
    toggleMode?.()
  }

  return (
    <FlexCol>
      <RotationAnimation rotation={20}>
        <IconButton color={iconColor} onClick={handleDarkModeChange} onMouseEnter={() => handleHover()} onMouseLeave={() => handleHover()} {...props}>
          {darkMode
            ? <DarkModeRounded />
            : <LightModeRounded />}
        </IconButton>
      </RotationAnimation>
    </FlexCol>
  )
}
