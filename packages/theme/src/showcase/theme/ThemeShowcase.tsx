import { Info } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Button, Card, CardContent, CardHeader, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, Paper, Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

import { ColorSchemeButton } from '../../components/index.ts'

export const ThemeShowcase: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AppBar position="sticky" sx={{ mb: 2 }}>
        <ColorSchemeButton />
      </AppBar>
      <Stack gap={2}>
        <Typography variant="h4" gutterBottom>
          Theme Showcase
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
        <Stack flexDirection="row" gap={2}>
          <Link href={top?.location.href}>
            Default
          </Link>
          <Link color="neutral" href={top?.location.href}>
            Neutral
          </Link>
          <Link color="primary" href={top?.location.href}>
            Primary
          </Link>
          <Link color="secondary" href={top?.location.href}>
            Secondary
          </Link>
        </Stack>
        <Stack flexDirection="row" gap={2}>
          <Paper sx={{ padding: 2 }}>Paper with default elevation</Paper>
        </Stack>
        <Stack flexDirection="row" gap={2}>
          <Tooltip
          // uncomment to show it by default for easier debugging of the css in browser dev tools
          // open
            title="A really long tooltip that should wrap to a new line."
            placement="top"
          >
            <Chip avatar={<Info />} label="Tooltip Demo" />
          </Tooltip>
        </Stack>
        <Stack flexDirection="row" gap={2}>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Dialog</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This is a dialog. It can be used to display information or
                prompt the user for input.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" onClick={() => setOpen(false)} autoFocus>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Open Dialog
          </Button>
        </Stack>
        <Stack flexDirection="row" gap={2}>
          <Card>
            <CardHeader title="Card Header" subheader="Card Subheader" />
            <CardContent>
              <Typography variant="body1">
                This is a card. It can be used to display information or prompt the user for input.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
        <Stack flexDirection="column">
          <Accordion>
            <AccordionSummary>Accordion Summary 1</AccordionSummary>
            <AccordionDetails>Accordion Details</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Accordion Summary 2</AccordionSummary>
            <AccordionDetails>Accordion Details</AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </>
  )
}
