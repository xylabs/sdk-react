import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import type { IconButtonProps } from '@mui/material'
import { IconButton, useColorScheme } from '@mui/material'
import { RotationAnimation } from '@xylabs/react-animation'
import { FlexCol } from '@xylabs/react-flexbox'
import React, { useMemo, useState } from 'react'

interface DefaultModeColors {
  defaultDarkModeColor?: IconButtonProps['color']
  defaultLightModeColor?: IconButtonProps['color']
}

type IconColor = IconButtonProps['color']

export interface DarkModeIconButtonForColorSchemeProps extends DefaultModeColors, IconButtonProps {}

export const DarkModeIconButtonForColorScheme: React.FC<DarkModeIconButtonForColorSchemeProps> = ({
  defaultDarkModeColor, defaultLightModeColor, ...props
}) => {
  const {
    mode, setMode, systemMode,
  } = useColorScheme()
  const resolvedMode = useMemo(() => (mode === 'system' ? systemMode : mode) ?? 'light', [mode, systemMode])

  const [iconColor, setIconColor] = useState<IconColor>(() => resolvedMode === 'dark' ? defaultDarkModeColor : defaultLightModeColor)
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
      const darkModeIconColor = defaultDarkModeColor ?? 'inherit'
      const lightModeIconColor = defaultLightModeColor ?? 'inherit'
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
