import { Alert, AlertTitle, Button, List, ListItem, Typography } from '@mui/material'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import { useMemo, useState } from 'react'

import { EthWallet } from '../../wallets'

export const EthWalletSBComponent: React.FC<EthWallet> = ({
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
      {window.ethereum ? <Alert>Found window.ethereum</Alert> : null}
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
