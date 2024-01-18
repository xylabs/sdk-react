import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { IconButton, IconButtonProps } from '@mui/material'
import { RotationAnimation } from '@xylabs/react-animation'
import { FlexCol } from '@xylabs/react-flexbox'
import { useState } from 'react'

import { useColorSchemeEx } from '../CssVarsProvider'

type iconColor = IconButtonProps['color']

export interface DarkModeIconButtonProps extends IconButtonProps {
  darkMode?: boolean
  toggleMode?: () => void
}

export const DarkModeIconButton: React.FC<DarkModeIconButtonProps> = ({ darkMode, toggleMode, ...props }) => {
  const [iconColor, setIconColor] = useState<iconColor>('inherit')
  const [iconColorIsSet, setIconColorIsSet] = useState(false)

  const handleHover = () => {
    setIconColor(darkMode ? (iconColorIsSet ? 'inherit' : 'info') : iconColorIsSet ? 'inherit' : 'warning')
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

export const DarkModeIconButtonForColorScheme: React.FC<IconButtonProps> = (props) => {
  const { darkMode, setMode } = useColorSchemeEx()
  const toggleMode = () => setMode(darkMode ? 'light' : 'dark')

  return <DarkModeIconButton darkMode={darkMode} toggleMode={toggleMode} {...props} />
}
