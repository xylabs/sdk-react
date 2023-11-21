import { Meta } from '@storybook/react'

import { EthWalletSBComponent } from '../../../components'
import { usePhantomWallet } from './use'

const UsePhantomSBComponent = () => {
  const hookState = usePhantomWallet()
  return <EthWalletSBComponent noIFrames {...hookState} />
}

const StorybookEntry = {
  argTypes: {},
  component: UsePhantomSBComponent,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'wallets/third-party/Phantom',
} as Meta<typeof UsePhantomSBComponent>

const Template = () => <UsePhantomSBComponent />

const Default = Template.bind({})

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
