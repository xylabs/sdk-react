import { Meta, StoryFn } from '@storybook/react'
import { WalletsDiscoveredMenuItems, WalletsDiscoveredMenuItemsProps } from '@xylabs/react-crypto'

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

const Template: StoryFn<WalletsDiscoveredMenuItemsProps> = (args) => <WalletsDiscoveredMenuItems {...args} />

const Default = Template.bind({})

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
