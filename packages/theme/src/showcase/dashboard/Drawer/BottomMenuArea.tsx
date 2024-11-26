import {
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import type { FlexBoxProps } from '@xylabs/react-flexbox'
import { FlexCol } from '@xylabs/react-flexbox'
import { DarkModeIconButtonForColorScheme } from '@xylabs/react-invertible-theme'
import React from 'react'

export interface BottomMenuAreaProps {
  backgroundColor?: string
  openDebug?: () => void
}

export const BottomMenuArea: React.FC<FlexBoxProps> = (props) => {
  return (
    <FlexCol alignContent="center" flexWrap="wrap" {...props}>
      <Toolbar sx={{ paddingX: 1.5 }}>
        <Tooltip title="Toggle Light/Dark Mode">
          <span>
            <DarkModeIconButtonForColorScheme defaultLightModeColor="warning" />
          </span>
        </Tooltip>
      </Toolbar>
      <Typography variant="body2">
        ©
        &nbsp;
        {new Date().getFullYear()}
      </Typography>
    </FlexCol>
  )
}
