import { List, Typography } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import type { SyntheticEvent } from 'react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { MenuListItemContainer } from '../../SiteMenu/index.ts'
import { SystemToolbar } from './SystemToolbar.tsx'

const DefaultMenu = (
  <List>
    <MenuListItemContainer primary="Hello" />
    <MenuListItemContainer
      primary="Click and Keep Open"
      onClick={(event: SyntheticEvent) => {
        event.stopPropagation()
      }}
    />
  </List>
)

const StorybookEntry: Meta = {
  component: SystemToolbar,
  parameters: { docs: { page: null } },
  title: 'appbar/Toolbar/System',
}

const Template: StoryFn<typeof SystemToolbar> = args => (
  <BrowserRouter>
    <SystemToolbar {...args} />
  </BrowserRouter>
)

const Default = Template.bind({})
Default.args = {}

const PrecedingChildren = Template.bind({})
PrecedingChildren.args = {
  precedingChildren: (
    <Typography variant="body1" mx={0.5}>
      Preceding Child Component
    </Typography>
  ),
}

const WithOnMenuToggle = Template.bind({})
WithOnMenuToggle.args = {
  menuItems: DefaultMenu,
  onMenuToggle: state => console.log(state),
}

export {
  Default, PrecedingChildren, WithOnMenuToggle,
}

export default StorybookEntry
