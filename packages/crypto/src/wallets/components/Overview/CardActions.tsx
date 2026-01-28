import type { CardActionsProps } from '@mui/material'
import { Button, CardActions } from '@mui/material'
import type { EthAddressWrapper } from '@xylabs/eth-address'
import { FlexCol } from '@xylabs/react-flexbox'
import type { Promisable } from '@xylabs/sdk-js'
import React, { useState } from 'react'

export interface WalletOverviewCardActions extends CardActionsProps {
  connectWallet?: () => Promise<string[] | null | undefined>
  currentAccount?: EthAddressWrapper
  onSign?: () => Promisable<void>
  onSignTypedData?: () => Promisable<void>
  onSwitchChain?: () => Promisable<void>
}

export const WalletOverviewCardActions: React.FC<WalletOverviewCardActions> = ({
  connectWallet, currentAccount, onSign, onSignTypedData, onSwitchChain, sx, ...props
}) => {
  const [connecting, setConnecting] = useState(false)

  const onConnect = () =>
    void (async () => {
      setConnecting(true)
      try {
        await connectWallet?.()
      } catch (e) {
        console.warn(e)
      }
      setConnecting(false)
    })()

  return (
    <CardActions
      {...props}
    >
      <FlexCol gap={2} sx={{ width: '100%' }}>
        <Button fullWidth disabled={!currentAccount} variant="contained" onClick={() => onSign ? void onSign() : undefined} size="small">
          Sign Test Message
        </Button>
        <Button
          fullWidth
          disabled={!currentAccount}
          variant="contained"
          onClick={() => (onSignTypedData ? void onSignTypedData() : undefined)}
          size="small"
        >
          Sign Typed Data Message
        </Button>
        <Button fullWidth size="small" disabled={connecting || !!currentAccount} variant="contained" onClick={onConnect}>
          {currentAccount ? 'Connected' : 'Connect'}
        </Button>
        <Button fullWidth size="small" variant="contained" onClick={() => void onSwitchChain?.()}>
          Switch Chain
        </Button>
      </FlexCol>
    </CardActions>
  )
}
