import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import type { WalletsDiscoveredMenuItemsProps } from './MenuItems.tsx'
import { WalletsDiscoveredMenuItems } from './MenuItems.tsx'

const StorybookEntry = {
  args: { open: true },
  component: WalletsDiscoveredMenuItems,
  parameters: {
    actions: { argTypesRegex: '!(^on.*)' },
    docs: { page: null },
  },
  title: 'wallets/Discovery/MenuItems',
} as Meta<typeof WalletsDiscoveredMenuItems>

const Template: StoryFn<WalletsDiscoveredMenuItemsProps> = args => <WalletsDiscoveredMenuItems {...args} />

const Default = Template.bind({})

export { Default }

export default StorybookEntry
