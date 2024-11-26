import {
  FileCopyRounded,
  MoreHorizRounded,
  PrintRounded,
  SaveRounded,
  ShareRounded,
} from '@mui/icons-material'
import {
  Box,
  SpeedDial,
  SpeedDialAction,
  styled,
  useTheme,
} from '@mui/material'
import { animated, useSpring } from '@react-spring/web'
import React, { useState } from 'react'

const actions = [
  { icon: <FileCopyRounded />, name: 'Copy' },
  { icon: <SaveRounded />, name: 'Save' },
  { icon: <PrintRounded />, name: 'Print' },
  { icon: <ShareRounded />, name: 'Share' },
]

interface AnimatedIconProps {
  open: boolean
  size?: 'small' | 'medium' | 'large'
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ open, size }) => {
  const { transform } = useSpring({
    transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
    config: { tension: 200, friction: 15 },
  })

  return (
    <animated.div
      style={{
        transform,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transformOrigin: 'center',
      }}
    >
      <MoreHorizRounded fontSize={size} />
    </animated.div>
  )
}

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  'position': 'absolute',
  'top': '0',
  'right': '0',
  '& .MuiSpeedDial-fab': {
    'backgroundColor': 'transparent',
    'color': theme.palette.text.primary,
    'boxShadow': 'none',
    'minWidth': 'auto',
    'minHeight': 'auto',
    '&:hover': { backgroundColor: 'transparent' },
  },
}))

interface DataCardSpeedDialProps {
  size?: 'small' | 'medium' | 'large'
}

export const DataCardSpeedDial: React.FC<DataCardSpeedDialProps> = ({ size }) => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box position="relative" minWidth="40px" minHeight="40px">
      <StyledSpeedDial
        ariaLabel="Data Card Actions"
        icon={<AnimatedIcon open={open} />}
        FabProps={{ size: size }}
        direction="down"
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        sx={{ zIndex: open ? 1300 : 1 }}

      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{
              'backgroundColor': theme.palette.primary.main,
              'color': theme.palette.primary.contrastText,
              '&:hover': { backgroundColor: theme.palette.primary.light },
            }}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  )
}
