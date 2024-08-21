import type { CardActionsProps } from '@mui/material'
import { Button, CardActions } from '@mui/material'
import type { EthAddress } from '@xylabs/eth-address'
import { forget } from '@xylabs/forget'
import type { Promisable } from '@xylabs/promise'
import React, { useState } from 'react'

export interface WalletOverviewCardActions extends CardActionsProps {
  connectWallet?: () => Promise<string[] | null | undefined>
  currentAccount?: EthAddress
  onSign?: () => Promisable<void>
}

export const WalletOverviewCardActions: React.FC<WalletOverviewCardActions> = ({
  connectWallet, currentAccount, onSign,
}) => {
  const [connecting, setConnecting] = useState(false)

  const onConnect = () =>
    forget(
      (async () => {
        setConnecting(true)
        try {
          await connectWallet?.()
        } catch (e) {
          console.warn(e)
        }
        setConnecting(false)
      })(),
    )

  return (
    <CardActions sx={{ justifyContent: 'center' }}>
      <Button disabled={!currentAccount} variant="contained" onClick={() => (onSign ? forget(Promise.resolve(onSign())) : undefined)} size="small">
        Sign Test Message
      </Button>
      <Button size="small" disabled={connecting || !!currentAccount} variant="contained" onClick={onConnect}>
        {currentAccount ? 'Connected' : 'Connect'}
      </Button>
    </CardActions>
  )
}
