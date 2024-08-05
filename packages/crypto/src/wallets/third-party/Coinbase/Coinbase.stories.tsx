import { Meta } from '@storybook/react'
import React from 'react'

import { EthWalletSBComponent } from '../../../components/index.ts'
import { useCoinbaseWallet } from './use.ts'

const UseCoinbaseSBComponent = () => {
  const hookState = useCoinbaseWallet()
  return <EthWalletSBComponent {...hookState} />
}

const StorybookEntry = {
  argTypes: {},
  component: UseCoinbaseSBComponent,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'wallets/third-party/Coinbase',
} as Meta<typeof UseCoinbaseSBComponent>

const Template = () => <UseCoinbaseSBComponent />

const Default = Template.bind({})

export { Default }

export default StorybookEntry
