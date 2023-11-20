import { Alert, AlertTitle, Button, List, ListItem, Typography } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import { PropsWithChildren, useState } from 'react'

import { EthersData } from '../Context'
import { useEthersContext } from '../use'
import { MetaMaskEthersLoader } from './EthersLoader'
import { useMetaMask } from './hooks'

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

const MetaMaskTester: React.FC<EthersData> = ({
  connect,
  connectRefused,
  chainId,
  error,
  isConnected,
  localAddress,
  provider,
  providerName,
  signMessage,
  signer,
  signerAddress,
}) => {
  const [signResponse, setSignResponse] = useState<string>()

  const onSign = async () => {
    const signResult = await signMessage?.('test')
    setSignResponse(signResult)
  }
  return (
    <FlexCol alignItems="start" gap={2}>
      <FlexRow justifyContent="start" gap={2}>
        <Button variant="contained" onClick={async () => await connect?.()}>
          Connect
        </Button>
        <Button disabled={!localAddress} variant="contained" onClick={onSign}>
          Sign
        </Button>
      </FlexRow>
      {signResponse ? (
        <Alert severity={'success'}>
          <AlertTitle>Sign Response</AlertTitle>
          {signResponse}
        </Alert>
      ) : null}
      <Typography variant="h6" mb={0}>
        Provider Details
      </Typography>
      <List sx={{ py: 0 }}>
        <ListItem>Chain Id: {chainId}</ListItem>
        <ListItem>Connected: {JSON.stringify(isConnected)}</ListItem>
        <ListItem>Local Address: {localAddress?.toString()}</ListItem>
        <ListItem>ProviderName: {providerName}</ListItem>
        <ListItem>Provider: {JSON.stringify(!!provider)}</ListItem>
        <ListItem>Signer: {JSON.stringify(!!signer)}</ListItem>
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
    return <MetaMaskTester {...contextState} />
  }
  return (
    <Context>
      <ContextValues />
    </Context>
  )
}

const WithHookTemplate = () => {
  const { currentAddress: localAddress, ...hookState } = useMetaMask()
  return <MetaMaskTester localAddress={localAddress} {...hookState} />
}

const WithProvider = WithProviderTemplate.bind({})
const WithHook = WithHookTemplate.bind({})

// TODO - story for signing a datagram

export { WithHook, WithProvider }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
