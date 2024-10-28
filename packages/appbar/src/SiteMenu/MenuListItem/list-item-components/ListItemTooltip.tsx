import { InfoOutlined } from '@mui/icons-material'
import type { TooltipProps } from '@mui/material'
import { Tooltip } from '@mui/material'
import { FlexCol } from '@xylabs/react-flexbox'
import React from 'react'

export interface ListItemTooltipProps extends Omit<TooltipProps, 'children'> {
  title: string
}

export const ListItemTooltip: React.FC<ListItemTooltipProps> = ({ title, ...props }) => {
  return (
    <Tooltip title={title} placement="right" {...props}>
      {/* Needs div so it can work, the hovering doesn't work with a FlexCol */}
      <div>
        <FlexCol justifyContent="center">
          <InfoOutlined sx={{ color: 'grey' }} />
        </FlexCol>
      </div>
    </Tooltip>
  )
}
