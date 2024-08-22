import type { Meta } from '@storybook/react'
import React from 'react'

import { EthWalletSBComponent } from '../../../components/index.ts'
import { usePhantomWallet } from './use.tsx'

const UsePhantomSBComponent = () => {
  const hookState = usePhantomWallet()
  return <EthWalletSBComponent noIFrames {...hookState} />
}

const StorybookEntry = {
  argTypes: {},
  component: UsePhantomSBComponent,
  parameters: { docs: { page: null } },
  title: 'wallets/third-party/Phantom',
} as Meta<typeof UsePhantomSBComponent>

const Template = () => <UsePhantomSBComponent />

const Default = Template.bind({})

export { Default }

export default StorybookEntry
