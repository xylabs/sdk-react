import { TravelExplore } from '@mui/icons-material'
import { List } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import type { MenuListItemProps } from './MenuListItemContainer.tsx'
import { MenuListItemContainer } from './MenuListItemContainer.tsx'

const StorybookEntry = {
  argTypes: {},
  component: MenuListItemContainer,
  parameters: { docs: { page: null } },
  title: 'appbar/MenuListItemContainer',
} as Meta<typeof MenuListItemContainer>

const SiteMenuList: React.FC<MenuListItemProps> = (args) => {
  return (
    <BrowserRouter>
      <List>
        <MenuListItemContainer {...args} />
        <MenuListItemContainer {...args} />
        <MenuListItemContainer {...args} />
      </List>
    </BrowserRouter>
  )
}

const Template: StoryFn<typeof MenuListItemContainer> = (args) => {
  return <SiteMenuList {...args} />
}

const Default = Template.bind({})
Default.args = {
  dense: true,
  icon: <TravelExplore />,
  primary: 'Explore',
  tooltip: 'View global archivist data on a world map.',
}

const WithChildren = Template.bind({})
WithChildren.args = {
  icon: <TravelExplore />,
  primary: 'Explore',
  subNavListItems: [{
    primary: 'Explore', to: '/explore', tooltip: 'View global archivist data on a world map.',
  }],
  tooltip: 'View global archivist data on a world map.',
}

export { Default, WithChildren }

export default StorybookEntry
