import { Meta } from '@storybook/react'
import { EthWalletSBComponent, useTrustWallet } from '@xylabs/react-crypto'

const UseTrustSBComponent = () => {
  const hookState = useTrustWallet()
  return <EthWalletSBComponent noIFrames {...hookState} />
}

const StorybookEntry = {
  argTypes: {},
  component: UseTrustSBComponent,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'wallets/third-party/Trust',
} as Meta<typeof UseTrustSBComponent>

const Template = () => <UseTrustSBComponent />

const Default = Template.bind({})

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
