import {
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material'
import { FlexCol } from '@xylabs/react-flexbox'
import type { ReactNode } from 'react'
import React from 'react'

import { DataCardSpeedDial } from './DataCardSpeedDial.tsx'

export interface DataCardProps {
  cardContent?: ReactNode
  dataDescription?: string
  headerTitle?: string
  size?: 'small' | 'medium' | 'large'
}

export const DataCard: React.FC<DataCardProps> = ({
  headerTitle,
  cardContent,
  dataDescription,
  size = 'medium',
}) => {
  return (
    <Card sx={{
      overflow: 'visible', display: 'flex', height: '100%', justifyContent: 'flex-start',
    }}
    >
      <CardHeader
        width="80%"
        title={(
          <Typography
            noWrap
            width="90%"
            variant="body2"
            textOverflow="ellipsis"
          >
            {headerTitle}
          </Typography>
        )}
        action={(
          <DataCardSpeedDial size={size} />
        )}
      />
      {dataDescription
        ? (
            <CardContent sx={{ paddingY: 0 }}>
              <FlexCol alignItems="stretch">
                <Typography textAlign="justify" width="100%" variant="caption">{dataDescription}</Typography>
              </FlexCol>
            </CardContent>
          )
        : null}
      <CardContent>
        <FlexCol alignItems="stretch">
          {cardContent}
        </FlexCol>
      </CardContent>
    </Card>
  )
}
