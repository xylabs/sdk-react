import { ArrowDownwardRounded, ArrowUpwardRounded } from '@mui/icons-material'
import {
  Box, Card, CardContent, CircularProgress, Fade, Stack, Tooltip, Typography,
} from '@mui/material'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import React, { useEffect, useState } from 'react'

import { earth } from './img/index.ts'

export interface DataHealthProps {
  cardTitle: string
  comparisonText: string
  comparisonValue: number
  status: string
}

export const DataHealth: React.FC<DataHealthProps> = ({
  cardTitle,
  comparisonText,
  comparisonValue,
  status,
}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Box>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
          flexDirection: 'column',
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <FlexCol alignItems="center">
            <Typography variant="h5" gutterBottom paddingBottom={1}>{cardTitle}</Typography>
            {loading
              ? (
                  <Fade in={loading}>
                    <FlexRow gap={1} alignItems="center">
                      <CircularProgress size={16} sx={{ color: '#00bcd4', mr: 1 }} />
                      <Typography variant="body1">{status}</Typography>
                    </FlexRow>
                  </Fade>
                )
              : (
                  <Fade in={!loading}>

                    <Tooltip title={(
                      <Typography variant="body2">
                        {comparisonText}
                      </Typography>
                    )}
                    >
                      <FlexCol gap={1} alignItems="center">
                        <Typography variant="h4">
                          97%
                        </Typography>
                        <Stack flexDirection="row" alignItems="center" gap={1}>
                          <Typography>
                            <strong>{comparisonValue >= 0 ? `+${comparisonValue.toFixed(2)}%` : `${comparisonValue.toFixed(2)}%`}</strong>
                          </Typography>
                          {comparisonValue >= 0 ? <ArrowUpwardRounded fontSize="small" /> : <ArrowDownwardRounded fontSize="small" />}
                        </Stack>
                      </FlexCol>
                    </Tooltip>
                  </Fade>
                )}
          </FlexCol>
        </CardContent>
        <Box
          sx={{
            justifySelf: 'center',
            backgroundImage: `url(${earth})`,
            backgroundSize: '400px',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            height: '200px',
            width: '120%',
          }}
        >
        </Box>
      </Card>
    </Box>
  )
}
