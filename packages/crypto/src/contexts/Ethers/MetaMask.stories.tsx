import { Button, List, ListItem, Typography } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { FlexCol } from '@xylabs/react-flexbox'
import { PropsWithChildren } from 'react'

import { EthersData } from './Context'
import { MetaMaskEthersLoader } from './MetaMask'
import { useMetaMask } from './MetaMask/hooks'
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

const ConnectMetaMaskProvider: React.FC<EthersData> = ({
  connect,
  connectRefused,
  chainId,
  error,
  isConnected,
  localAddress,
  provider,
  providerName,
  signer,
  signerAddress,
  walletProvider,
}) => {
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
        <ListItem>Signer Address: {signerAddress}</ListItem>
        <ListItem>Connection Refused: {JSON.stringify(connectRefused)}</ListItem>
        <ListItem>Error: {error?.message}</ListItem>
      </List>
    </FlexCol>
  )
}

const WithProviderTemplate: StoryFn<typeof MetaMaskEthersLoader> = (args) => {
  const Context: React.FC<PropsWithChildren> = ({ children }) => <MetaMaskEthersLoader {...args}>{children}</MetaMaskEthersLoader>
  const ContextValues: React.FC = () => {
    const contextState = useEthersContext()
    return <ConnectMetaMaskProvider {...contextState} />
  }
  return (
    <Context>
      <ContextValues />
    </Context>
  )
}

const WithHookTemplate = () => {
  const { currentAddress: localAddress, ...hookState } = useMetaMask()
  return <ConnectMetaMaskProvider localAddress={localAddress} {...hookState} />
}

const WithProvider = WithProviderTemplate.bind({})
const WithHook = WithHookTemplate.bind({})

export { WithHook, WithProvider }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
