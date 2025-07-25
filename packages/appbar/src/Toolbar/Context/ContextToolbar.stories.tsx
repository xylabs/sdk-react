import { AppBar } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import { ColorSchemeButton } from '@xylabs/react-theme'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ContextToolbar } from './ContextToolbar.tsx'

const StorybookEntry = {
  argTypes: {},
  component: ContextToolbar,
  parameters: { docs: { page: null } },
  title: 'appbar/Toolbar/Context',
} as Meta<typeof ContextToolbar>

const Template: StoryFn<typeof ContextToolbar> = args => (
  <div>
    <AppBar position="static">
      <BrowserRouter>
        <ContextToolbar {...args}></ContextToolbar>
      </BrowserRouter>
    </AppBar>
    <ColorSchemeButton />
  </div>
)

const Default = Template.bind({})
Default.args = {}

const WithVersion = Template.bind({})
WithVersion.args = { version: true }

export { Default, WithVersion }

export default StorybookEntry
