import { Alert, AlertTitle, Button, List, ListItem, Paper, PaperProps, Typography } from '@mui/material'
import { EthAddress } from '@xylabs/eth-address'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import { useEffect, useMemo, useState } from 'react'

import { EthWalletWithProviderInfo } from '../../EthWallet'
import { WalletDisplayAdditionalDetails } from './AdditionalDetails'

export interface WalletDetailsPaperProps extends EthWalletWithProviderInfo, PaperProps {}

export const WalletDetailsPaper: React.FC<WalletDetailsPaperProps> = ({ ethWallet, info, ...props }) => {
  const { connectWallet, connectRefused, chainId, connectError, currentAccount, providerName, signMessage, signer, signerAddress } = ethWallet ?? {}

  const [signResponse, setSignResponse] = useState<EthAddress>()
  const [connecting, setConnecting] = useState(false)

  const localAddress = useMemo(() => currentAccount?.toShortString(), [currentAccount])

  useEffect(() => {
    setSignResponse(undefined)
  }, [localAddress])

  const onSign = async () => {
    const signResult = await signMessage?.('test')
    setSignResponse(EthAddress.fromString(signResult))
  }

  const onConnect = async () => {
    setConnecting(true)
    try {
      await connectWallet?.()
    } catch (e) {
      console.warn(e)
    }
    setConnecting(false)
  }

  return (
    <Paper {...props} sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
      {window.parent !== window ? (
        <Alert severity={'warning'}>
          <AlertTitle>Avoid calling wallets inside of iFrames</AlertTitle>
        </Alert>
      ) : null}
      <FlexCol alignItems="start" gap={2}>
        <FlexRow justifyContent="start" gap={2}>
          <Button
            startIcon={<img style={{ maxWidth: '24px' }} src={info?.icon} />}
            disabled={connecting || !!localAddress}
            variant="contained"
            onClick={onConnect}
          >
            {localAddress ? 'Connected' : 'Connect'}
          </Button>
          <Button disabled={!currentAccount} variant="contained" onClick={onSign}>
            Sign Test Message
          </Button>
        </FlexRow>
        {signResponse ? (
          <Alert severity={'success'}>
            <AlertTitle>Sign Response</AlertTitle>
            {signResponse.toShortString()}
          </Alert>
        ) : null}
        <Typography variant="h6" mb={0}>
          Wallet Details
        </Typography>
        <List sx={{ py: 0 }}>
          <ListItem>Wallet Name: {providerName}</ListItem>
          <ListItem>Local Address: {localAddress}</ListItem>
          <ListItem>Chain Id: {chainId}</ListItem>
        </List>
        <WalletDisplayAdditionalDetails
          signer={!!signer}
          signerAddress={signerAddress}
          connectErrorMessage={connectError?.message}
          connectRefused={connectRefused}
        />
      </FlexCol>
    </Paper>
  )
}
