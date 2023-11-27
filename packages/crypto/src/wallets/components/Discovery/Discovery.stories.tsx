import { Alert, AlertTitle } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { FlexCol } from '@xylabs/react-flexbox'
import { useState } from 'react'

import { DiscoveredWalletsMenu, WalletDiscoveryMenu, WalletDiscoveryMenuProps } from './DiscoveryMenu'
import { EIP6963ProviderDetail } from './lib'

const StorybookEntry = {
  argTypes: {},
  component: WalletDiscoveryMenu,
  parameters: {
    actions: { argTypesRegex: '!(^on.*)' },
    docs: {
      page: null,
    },
  },
  title: 'wallets/Discovery',
} as Meta<typeof WalletDiscoveryMenu>

const Template: StoryFn<WalletDiscoveryMenuProps> = (args) => <DiscoveredWalletsMenu {...args} />
const TemplateWithItems: StoryFn<WalletDiscoveryMenuProps> = (args) => {
  const [selectedWallet, setSelectedWallet] = useState<string>()
  const onWalletSelect = ({ info }: EIP6963ProviderDetail) => {
    setSelectedWallet(info.name)
  }
  return (
    <FlexCol alignItems="start">
      {selectedWallet ? (
        <Alert>
          <AlertTitle>Selected Wallet</AlertTitle>
          {selectedWallet}
        </Alert>
      ) : null}
      <WalletDiscoveryMenu onWalletSelect={onWalletSelect} {...args} />
    </FlexCol>
  )
}

const Default = Template.bind({})
const Open = TemplateWithItems.bind({})
Open.args = {
  open: true,
}

export { Default, Open }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
