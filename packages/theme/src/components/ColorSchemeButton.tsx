import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import type { IconButtonProps } from '@mui/material'
import { IconButton, useColorScheme } from '@mui/material'
import { RotationAnimation } from '@xylabs/react-animation'
import { FlexCol } from '@xylabs/react-flexbox'
import React, { useMemo, useState } from 'react'

export interface ColorSchemeButtonProps extends IconButtonProps {
  darkModeColor?: IconButtonProps['color']
  lightModeColor?: IconButtonProps['color']
}

export const ColorSchemeButton: React.FC<ColorSchemeButtonProps> = ({
  darkModeColor, lightModeColor, ...props
}) => {
  const {
    mode, setMode, systemMode,
  } = useColorScheme()
  const resolvedMode = useMemo(() => (mode === 'system' ? systemMode : mode) ?? 'light', [mode, systemMode])

  const [iconColor, setIconColor] = useState<IconButtonProps['color']>(() => resolvedMode === 'dark' ? darkModeColor : lightModeColor)
  const [iconColorIsSet, setIconColorIsSet] = useState(false)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else if (mode === 'dark') {
      setMode('system')
    } else {
      setMode('light')
    }
  }

  const handleHover = () => {
    setIconColor(() => {
      const darkModeIconColor = darkModeColor ?? 'inherit'
      const lightModeIconColor = lightModeColor ?? 'inherit'
      if (resolvedMode === 'dark') {
        return iconColorIsSet ? darkModeIconColor : 'info'
      } else {
        return iconColorIsSet ? lightModeIconColor : 'warning'
      }
    })
    setIconColorIsSet(!iconColorIsSet)
  }

  return (
    <FlexCol>
      <RotationAnimation rotation={20}>
        <IconButton color={iconColor} onClick={toggleMode} onMouseEnter={() => handleHover()} onMouseLeave={() => handleHover()} {...props}>
          {resolvedMode === 'dark'
            ? <DarkModeRounded />
            : <LightModeRounded />}
          {mode === 'system'
            ? (
                <span
                  style={
                    {
                      position: 'absolute', bottom: 2, fontSize: 8,
                    }
                  }
                >
                  Auto
                </span>
              )
            : null}
        </IconButton>
      </RotationAnimation>
    </FlexCol>
  )
}
