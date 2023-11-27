import { Meta, StoryFn } from '@storybook/react'

import { WalletDiscoveryMenu, WalletDiscoveryMenuProps } from './DiscoveryMenu'

const StorybookEntry = {
  argTypes: {},
  component: WalletDiscoveryMenu,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'wallets/Discovery',
} as Meta<typeof WalletDiscoveryMenu>

const Template: StoryFn<WalletDiscoveryMenuProps> = ({ ...args }) => <WalletDiscoveryMenu {...args} />

const Default = Template.bind({})
const Open = Template.bind({})
Open.args = {
  open: true,
}

export { Default, Open }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
