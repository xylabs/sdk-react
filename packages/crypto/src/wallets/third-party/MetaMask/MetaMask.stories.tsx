import type { Meta } from '@storybook/react-vite'
import React from 'react'

import { EthWalletSBComponent } from '../../../components/index.ts'
import { useMetaMask } from './use.tsx'

const UseMetaMaskSBComponent = () => {
  const hookState = useMetaMask()
  return <EthWalletSBComponent {...hookState} />
}

const StorybookEntry = {
  argTypes: {},
  component: UseMetaMaskSBComponent,
  parameters: { docs: { page: null } },
  title: 'wallets/third-party/MetaMask',
} as Meta<typeof UseMetaMaskSBComponent>

const Template = () => <UseMetaMaskSBComponent />

const Default = Template.bind({})

export { Default }

export default StorybookEntry
