import { Meta } from '@storybook/react'
import { EthWalletSBComponent, useCoinbaseWallet } from '@xylabs/react-crypto'

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

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
