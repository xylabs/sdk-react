import { Menu as MenuIcon } from '@mui/icons-material'
import { Toolbar } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import { AppBarEx } from './AppBarEx.tsx'
import type { AppBarExProps } from './AppBarExProps.tsx'

const StorybookEntry = {
  argTypes: {},
  component: AppBarEx,
  parameters: { docs: { page: null } },
  title: 'appbar/AppBarEx',
} as Meta<typeof AppBarEx>

const Template: StoryFn<typeof AppBarEx> = (args: AppBarExProps) => <AppBarEx {...args}></AppBarEx>

const Empty = Template.bind({})
Empty.args = { title: 'Empty' }

const WithMenu = Template.bind({})
WithMenu.args = {
  menu: (
    <Toolbar>
      <MenuIcon />
    </Toolbar>
  ),
  title: 'Empty',
}

export { Empty, WithMenu }

export default StorybookEntry
