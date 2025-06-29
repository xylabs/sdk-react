import { Button, Typography } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import React, { useState } from 'react'

import { BusyBox } from './BusyBox.tsx'

const StorybookEntry = {
  argTypes: {},
  component: BusyBox,
  parameters: { docs: { page: null } },
  title: 'flexbox/BusyBox',
} as Meta<typeof BusyBox>

const BusyBoxTemplate: StoryFn<typeof BusyBox> = args => <BusyBox {...args}></BusyBox>

const BusyBoxMinimumTemplate: StoryFn<typeof BusyBox> = (args) => {
  const [busyToggle, setBusyToggle] = useState(false)
  const { busyMinimum } = args
  return (
    <>
      <Typography variant="body1">
        Busy mode should be at least
        {(busyMinimum || 0) / 1000}
        {' '}
        seconds
      </Typography>
      {`BusyToggle: ${busyToggle}`}
      <Button
        variant="contained"
        onClick={() => {
          setBusyToggle(!busyToggle)
        }}
        sx={{ marginBottom: 2 }}
      >
        Toggle Busy
      </Button>
      <BusyBox {...args} busy={busyToggle}></BusyBox>
    </>
  )
}

const Circular = BusyBoxTemplate.bind({})
Circular.args = {
  bgcolor: 'gray',
  busy: true,
  busyCircularProps: { opacity: 0 },
  busyVariant: 'circular',
  height: 180,
  padding: 2,
  width: 360,
}

const Linear = BusyBoxTemplate.bind({})
Linear.args = {
  bgcolor: 'gray',
  busy: true,
  busyLinearProps: { opacity: 0 },
  busyVariant: 'linear',
  height: 180,
  padding: 2,
  width: 360,
}

const LinearBuffer = BusyBoxTemplate.bind({})
LinearBuffer.args = {
  bgcolor: 'gray',
  busy: true,
  busyLinearProps: { variant: 'buffer' },
  busyVariant: 'linear',
  height: 180,
  padding: 2,
  width: 360,
}

const LinearDeterminate = BusyBoxTemplate.bind({})
LinearDeterminate.args = {
  bgcolor: 'gray',
  busy: true,
  busyLinearProps: { variant: 'determinate' },
  busyVariant: 'linear',
  height: 180,
  padding: 2,
  width: 360,
}

const LinearQuery = BusyBoxTemplate.bind({})
LinearQuery.args = {
  bgcolor: 'gray',
  busy: true,
  busyLinearProps: { variant: 'query' },
  busyVariant: 'linear',
  height: 180,
  padding: 2,
  width: 360,
}

const BusyMinimum = BusyBoxMinimumTemplate.bind({})
BusyMinimum.args = {
  bgcolor: 'gray',
  busyCircularProps: { opacity: 0 },
  busyMinimum: 3000,
  busyVariant: 'circular',
  height: 180,
  padding: 2,
  width: 360,
}

export {
  BusyMinimum, Circular, Linear, LinearBuffer, LinearDeterminate, LinearQuery,
}

export default StorybookEntry
