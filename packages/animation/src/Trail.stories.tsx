import { Card } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import type { TrailProps } from './Trail.tsx'
import { Trail } from './Trail.tsx'

const TestCard = () => (
  <Card sx={{
    width: '300px', height: '300px', display: 'flex', bgcolor: 'green',
  }}
  />
)

const testCards = Array.from({ length: 5 }, (_, index) => <TestCard key={index} />)

export default {
  title: 'animations/Trail',
  component: Trail,
} as Meta

const DefaultProps: TrailProps = {
  open: true,
  gap: 2,
  fullWidth: true,
  display: 'flex',
  flexDirection: 'row',
}

const Template: StoryFn<typeof Trail> = args => <Trail {...args} />

const Default = Template.bind({})
Default.args = { children: [], ...DefaultProps }

const WithChildren = Template.bind({})
WithChildren.args = { children: testCards, ...DefaultProps }

const WithChildrenProps = Template.bind({})
WithChildrenProps.args = {
  children: testCards, ...DefaultProps, flexDirection: 'column', fullWidth: false,
}

export {
  Default, WithChildren, WithChildrenProps,
}
