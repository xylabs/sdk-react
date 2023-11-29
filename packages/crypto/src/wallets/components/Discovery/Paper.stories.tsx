import { Meta, StoryFn } from '@storybook/react'
import { FlexRow } from '@xylabs/react-flexbox'
import { useState } from 'react'

import { EIP6963Connector } from '../../third-party'
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
  const [selectedWallet, setSelectedWallet] = useState<EIP6963Connector>(new EIP6963Connector())
  const onWalletSelect: onWalletSelect = (eIP6963Connector) => {
    setSelectedWallet(eIP6963Connector)
  }

  return (
    <FlexRow justifyContent="start" alignItems="start" gap={4}>
      <WalletDiscoveryPaper onWalletSelect={onWalletSelect} {...args} />
      {selectedWallet.rawProvider ? <WalletOverviewCard ethWalletConnector={selectedWallet} sx={{ width: '300px' }} /> : null}
    </FlexRow>
  )
}

const Default = Template.bind({})

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
