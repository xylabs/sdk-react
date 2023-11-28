import { Meta, StoryFn } from '@storybook/react'
import { FlexRow } from '@xylabs/react-flexbox'
import { BrowserProvider } from 'ethers'
import { useState } from 'react'

import { useEIP6963Wallet } from '../../third-party'
import { SelectedWallet } from '../../types'
import { WalletOverviewCard } from '../Overview'
import { onWalletSelect } from './lib'
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
  title: 'wallets/Discovery/Paper',
} as Meta<typeof WalletDiscoveryPaper>

const Template: StoryFn<WalletDiscoveryPaperProps> = (args) => {
  const [selectedWallet, setSelectedWallet] = useState<SelectedWallet>()
  const onWalletSelect: onWalletSelect = ({ info, provider }) => {
    const browserProvider = new BrowserProvider(provider)
    setSelectedWallet({ info, provider: browserProvider, rawProvider: provider })
  }

  const hookState = useEIP6963Wallet(selectedWallet)
  return (
    <FlexRow justifyContent="start" alignItems="start" gap={4}>
      <WalletDiscoveryPaper onWalletSelect={onWalletSelect} {...args} />
      {selectedWallet ? <WalletOverviewCard {...hookState} sx={{ width: '300px' }} /> : null}
    </FlexRow>
  )
}

const Default = Template.bind({})

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
