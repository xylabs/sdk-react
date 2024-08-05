import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { WalletsDiscoveredMenuItems, WalletsDiscoveredMenuItemsProps } from './MenuItems.tsx'

const StorybookEntry = {
  args: {
    open: true,
  },
  component: WalletsDiscoveredMenuItems,
  parameters: {
    actions: { argTypesRegex: '!(^on.*)' },
    docs: {
      page: null,
    },
  },
  title: 'wallets/Discovery/MenuItems',
} as Meta<typeof WalletsDiscoveredMenuItems>

const Template: StoryFn<WalletsDiscoveredMenuItemsProps> = args => <WalletsDiscoveredMenuItems {...args} />

const Default = Template.bind({})

export { Default }

export default StorybookEntry
