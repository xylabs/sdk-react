import { Alert, AlertTitle, Button, Card, CardActions, CardContent, CardHeader, CardProps, Divider, styled, Typography } from '@mui/material'
import { EthAddress } from '@xylabs/eth-address'
import { FlexRow } from '@xylabs/react-flexbox'
import { useEffect, useMemo, useState } from 'react'

import { EthWalletWithProviderInfo } from '../../types'

export interface WalletOverviewCardProps extends EthWalletWithProviderInfo, CardProps {}

export const WalletOverviewCard: React.FC<WalletOverviewCardProps> = ({ ethWallet, info, ...props }) => {
  const { connectWallet, connectRefused, chainId, connectError, currentAccount, providerName, signMessage, signerAddress } = ethWallet ?? {}
  const [signResponse, setSignResponse] = useState<EthAddress>()

  useEffect(() => {
    setSignResponse(undefined)
  }, [signerAddress])

  const onSign = async () => {
    const signResult = await signMessage?.('test')
    setSignResponse(EthAddress.fromString(signResult))
  }

  const [connecting, setConnecting] = useState(false)

  const approvedAddress = useMemo(() => currentAccount?.toShortString(), [currentAccount])

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
    <Card {...props}>
      <CardHeader avatar={<img src={info?.icon} />} title={providerName} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {window.parent !== window ? (
          <Alert severity={'warning'}>
            <AlertTitle>Avoid calling wallets inside of iFrames</AlertTitle>
          </Alert>
        ) : null}
        <FlexRow justifyContent="start" gap={2}>
          <span>
            <StyledTypographyHeading variant="overline">Wallet Name:</StyledTypographyHeading>
            <Typography>{providerName}</Typography>
          </span>
          <span>
            <StyledTypographyHeading variant="overline">Chain Id:</StyledTypographyHeading>
            <Typography>{chainId ? chainId : 'none'}</Typography>
          </span>
        </FlexRow>
        <Divider flexItem />
        <span>
          <StyledTypographyHeading variant="overline">Approved Address:</StyledTypographyHeading>
          <Typography>{approvedAddress ? approvedAddress : 'none'}</Typography>
        </span>
        {connectRefused ? (
          <Alert severity={'error'}>
            <AlertTitle>Connection Refused</AlertTitle>
            Error: {connectError?.message}
          </Alert>
        ) : null}
        {signResponse ? (
          <Alert severity={'success'}>
            <AlertTitle>Sign Response</AlertTitle>
            {signResponse.toShortString()}
          </Alert>
        ) : null}
      </CardContent>
      <CardActions sx={{ justifyContent: 'right' }}>
        <Button disabled={!currentAccount} variant="contained" onClick={onSign} size="small">
          Sign Test Message
        </Button>
        <Button size="small" disabled={connecting || !!approvedAddress} variant="contained" onClick={onConnect}>
          {approvedAddress ? 'Connected' : 'Connect'}
        </Button>
      </CardActions>
    </Card>
  )
}

const StyledTypographyHeading = styled(Typography, { name: 'StyledTypographyHeading' })(() => ({
  opacity: 0.7,
}))
