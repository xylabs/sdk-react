import {
  Button, Stack,
  Typography,
} from '@mui/material'
import React from 'react'

export const ThemeShowcase: React.FC = () => {
  return (
    <Stack gap={2}>
      <Typography variant="h4" gutterBottom>
        XYO Website Theme Showcase
      </Typography>
      <Stack flexDirection="row" gap={2}>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="primary" variant="outlined">
          Primary
        </Button>
        <Button color="primary" variant="text">
          Primary
        </Button>
      </Stack>
      <Stack flexDirection="row" gap={2}>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="secondary" variant="outlined">
          Secondary
        </Button>
        <Button color="secondary" variant="text">
          Secondary
        </Button>
      </Stack>
      <Stack flexDirection="row" gap={2}>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="success" variant="outlined">
          Success
        </Button>
        <Button color="success" variant="text">
          Success
        </Button>
      </Stack>
      <Stack flexDirection="row" gap={2}>
        <Button color="info" variant="contained">
          Info
        </Button>
        <Button color="info" variant="outlined">
          Info
        </Button>
        <Button color="info" variant="text">
          Info
        </Button>
      </Stack>
      <Stack flexDirection="row" gap={2}>
        <Button color="warning" variant="contained">
          Warning
        </Button>
        <Button color="warning" variant="outlined">
          Warning
        </Button>
        <Button color="warning" variant="text">
          Warning
        </Button>
      </Stack>
      <Stack flexDirection="row" gap={2}>
        <Button color="error" variant="contained">
          Error
        </Button>
        <Button color="error" variant="outlined">
          Error
        </Button>
        <Button color="error" variant="text">
          Error
        </Button>
      </Stack>
      <Stack flexDirection="row" gap={2}>
        <Button color="neutral" variant="contained">
          Neutral
        </Button>
        <Button color="neutral" variant="outlined">
          Neutral
        </Button>
        <Button color="neutral" variant="text">
          Neutral
        </Button>
      </Stack>
    </Stack>
  )
}
