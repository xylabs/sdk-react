import { Alert, AlertTitle, Button, List, ListItem, Typography } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import { PropsWithChildren, useMemo, useState } from 'react'

import { useEthersContext } from '../use'
import { EthWallet } from '../wallets'
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

const MetaMaskTester: React.FC<EthWallet> = ({
  connectWallet,
  connectRefused,
  chainId,
  connectError,
  installed,
  currentAccount,
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

  const localAddress = useMemo(() => currentAccount?.toString(), [currentAccount])
  return (
    <FlexCol alignItems="start" gap={2}>
      <FlexRow justifyContent="start" gap={2}>
        <Button variant="contained" onClick={async () => await connectWallet?.()}>
          Connect
        </Button>
        <Button disabled={!currentAccount} variant="contained" onClick={onSign}>
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
        <ListItem>Installed: {JSON.stringify(installed)}</ListItem>
        <ListItem>Chain Id: {chainId}</ListItem>
        <ListItem>Local Address: {localAddress?.toString()}</ListItem>
        <ListItem>ProviderName: {providerName}</ListItem>
        <ListItem>Provider: {JSON.stringify(!!provider)}</ListItem>
        <ListItem>Signer: {JSON.stringify(!!signer)}</ListItem>
        <ListItem>Signer Address: {signerAddress}</ListItem>
        <ListItem>Connection Refused: {JSON.stringify(connectRefused)}</ListItem>
        <ListItem>Error: {connectError?.message ?? connectError?.message}</ListItem>
      </List>
    </FlexCol>
  )
}

const WithProviderTemplate: StoryFn<typeof MetaMaskEthersLoader> = (args) => {
  const Context: React.FC<PropsWithChildren> = ({ children }) => <MetaMaskEthersLoader {...args}>{children}</MetaMaskEthersLoader>
  const ContextValues: React.FC = () => {
    const { connect: connectWallet, isConnected: installed, ...contextState } = useEthersContext()
    return <MetaMaskTester connectWallet={connectWallet} installed={installed} {...contextState} />
  }
  return (
    <Context>
      <ContextValues />
    </Context>
  )
}

const WithHookTemplate = () => {
  const hookState = useMetaMask()
  return <MetaMaskTester {...hookState} />
}

const WithProvider = WithProviderTemplate.bind({})
const WithHook = WithHookTemplate.bind({})

// TODO - story for signing a datagram

export { WithHook, WithProvider }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
