import type { BoxProps } from '@mui/material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFound: React.FC<BoxProps> = ({ sx, ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex', flexDirection: 'column', ...sx,
      }}
      {...props}
    >
      <Typography variant="h2">Sorry!</Typography>
      <Typography marginY={3} variant="body2">
        {'Can\'t find anything here'}
      </Typography>
    </Box>
  )
}

export { NotFound }
