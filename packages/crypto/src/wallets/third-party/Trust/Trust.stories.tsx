import type { Meta } from '@storybook/react'
import React from 'react'

import { EthWalletSBComponent } from '../../../components/index.ts'
import { useTrustWallet } from './use.ts'

const UseTrustSBComponent = () => {
  const hookState = useTrustWallet()
  return <EthWalletSBComponent noIFrames {...hookState} />
}

const StorybookEntry = {
  argTypes: {},
  component: UseTrustSBComponent,
  parameters: { docs: { page: null } },
  title: 'wallets/third-party/Trust',
} as Meta<typeof UseTrustSBComponent>

const Template = () => <UseTrustSBComponent />

const Default = Template.bind({})

export { Default }

export default StorybookEntry
