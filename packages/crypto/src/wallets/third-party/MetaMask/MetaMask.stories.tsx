import { Meta } from '@storybook/react'

import { EthWalletSBComponent } from '../../../components'
import { useMetaMask } from './use'

const UseMetaMaskSBComponent = () => {
  const hookState = useMetaMask()
  return <EthWalletSBComponent {...hookState} />
}

const StorybookEntry = {
  argTypes: {},
  component: UseMetaMaskSBComponent,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'wallets/third-party/MetaMask',
} as Meta<typeof UseMetaMaskSBComponent>

const Template = () => <UseMetaMaskSBComponent />

const Default = Template.bind({})

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
