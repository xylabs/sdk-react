import { Button, List, ListItem, Typography } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { FlexCol } from '@xylabs/react-flexbox'

import { MetaMaskEthersLoader } from './MetaMask'
import { useEthersContext } from './use'

const StorybookEntry = {
  argTypes: {},
  component: MetaMaskEthersLoader,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'common/EthersLoader/MetaMaskEthersLoader',
} as Meta<typeof MetaMaskEthersLoader>

const ConnectMetaMaskProvider = () => {
  const { connect, chainId, error, isConnected, localAddress, provider, providerName, signer, walletProvider } = useEthersContext()
  return (
    <FlexCol alignItems="start" gap={2}>
      <Button variant="contained" onClick={async () => await connect?.()}>
        Connect
      </Button>
      <Typography variant="h6" mb={0}>
        Provider Details
      </Typography>
      <List sx={{ py: 0 }}>
        <ListItem>Chain Id: {chainId}</ListItem>
        <ListItem>Connected: {JSON.stringify(isConnected)}</ListItem>
        <ListItem>Local Address: {localAddress?.toString()}</ListItem>
        <ListItem>ProviderName: {providerName}</ListItem>
        <ListItem>Provider: {JSON.stringify(provider?._isProvider)}</ListItem>
        <ListItem>Wallet Provider: {JSON.stringify(walletProvider?._isProvider)}</ListItem>
        <ListItem>Signer: {JSON.stringify(signer?._isSigner)}</ListItem>
        <ListItem>Error: {error?.message}</ListItem>
      </List>
    </FlexCol>
  )
}

const Template: StoryFn<typeof MetaMaskEthersLoader> = (args) => (
  <MetaMaskEthersLoader {...args}>
    <ConnectMetaMaskProvider />
  </MetaMaskEthersLoader>
)

const Default = Template.bind({})

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
