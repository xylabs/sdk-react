import { Alert, AlertTitle } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { FlexCol } from '@xylabs/react-flexbox'
import { useState } from 'react'

import { EIP6963ProviderDetail } from './lib'
import { WalletDiscoveryPaper, WalletDiscoveryPaperProps } from './Paper'

const StorybookEntry = {
  args: {
    open: true,
  },
  component: WalletDiscoveryPaper,
  parameters: {
    actions: { argTypesRegex: '!(^on.*)' },
    docs: {
      page: null,
    },
  },
  title: 'wallets/Discovery',
} as Meta<typeof WalletDiscoveryPaper>

const TemplateWithWallets: StoryFn<WalletDiscoveryPaperProps> = (args) => {
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
      <WalletDiscoveryPaper onWalletSelect={onWalletSelect} {...args} />
    </FlexCol>
  )
}

const Default = TemplateWithWallets.bind({})

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
