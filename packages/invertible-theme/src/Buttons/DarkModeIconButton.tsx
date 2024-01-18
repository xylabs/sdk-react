import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { IconButton, IconButtonProps } from '@mui/material'
import { RotationAnimation } from '@xylabs/react-animation'
import { FlexCol } from '@xylabs/react-flexbox'
import { useState } from 'react'

import { useColorSchemeEx } from '../CssVarsProvider'

type iconColor = IconButtonProps['color']

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
  const [iconColor, setIconColor] = useState<iconColor>('inherit')
  const [iconColorIsSet, setIconColorIsSet] = useState(false)
  const darkModeIconColor = defaultDarkModeColor ?? 'inherit'
  const lightModeIconColor = defaultLightModeColor ?? 'inherit'

  const handleHover = () => {
    setIconColor(darkMode ? (iconColorIsSet ? darkModeIconColor : 'info') : iconColorIsSet ? lightModeIconColor : 'warning')
    setIconColorIsSet(!iconColorIsSet)
  }

  const handleDarkModeChange = () => {
    toggleMode?.()
  }

  return (
    <FlexCol>
      <RotationAnimation rotation={20}>
        <IconButton color={iconColor} onClick={handleDarkModeChange} onMouseEnter={() => handleHover()} onMouseLeave={() => handleHover()} {...props}>
          {darkMode ? <DarkModeRounded /> : <LightModeRounded />}
        </IconButton>
      </RotationAnimation>
    </FlexCol>
  )
}

export interface DarkModeIconButtonForColorSchemeProps extends DefaultModeColors, IconButtonProps {}

export const DarkModeIconButtonForColorScheme: React.FC<DarkModeIconButtonForColorSchemeProps> = (props) => {
  const { darkMode, setMode } = useColorSchemeEx()
  const toggleMode = () => setMode(darkMode ? 'light' : 'dark')

  return <DarkModeIconButton darkMode={darkMode} toggleMode={toggleMode} {...props} />
}
