import type { CardProps } from '@mui/material'
import { Card } from '@mui/material'
import { EthAddressWrapper } from '@xylabs/eth-address'
import type { Hex } from '@xylabs/hex'
import React, { useMemo, useState } from 'react'

import type { EIP6963Connector } from '../../classes/index.ts'
import { useEthWalletInstance } from '../../hooks/index.ts'
import { WalletOverviewCardActions } from './CardActions.tsx'
import { WalletOverviewCardContent } from './CardContent.tsx'
import { WalletOverviewCardHeader } from './CardHeader.tsx'

export interface WalletOverviewCardProps extends CardProps {
  ethWalletConnector: EIP6963Connector
}

export const WalletOverviewCard: React.FC<WalletOverviewCardProps> = ({ ethWalletConnector, ...props }) => {
  const {
    chainId,
    connectWallet,
    connectRefused,
    chainName,
    connectError,
    currentAccount,
    providerInfo,
    providerName,
    ethWalletApiInstance,
    signMessage,
    signerAddress,
  } = useEthWalletInstance(ethWalletConnector)
  const [signResponse, setSignResponse] = useState<EthAddressWrapper>()

  useMemo(() => {
    setSignResponse(undefined)
  }, [signerAddress])

  const onSign = async () => {
    const signResult = await signMessage?.('test')
    setSignResponse(EthAddressWrapper.fromString(signResult))
  }

  const onSwitchChain = async () => {
    const mainnet = '0x1' as Hex
    const sepolia = '0xaa36a7' as Hex
    await (chainId === 1 ? ethWalletApiInstance.switchEthereumChain(sepolia) : ethWalletApiInstance.switchEthereumChain(mainnet))
  }

  return (
    <Card {...props}>
      <WalletOverviewCardHeader currentAccount={currentAccount} icon={providerInfo?.icon} walletName={providerName} />
      <WalletOverviewCardContent
        chainName={chainName}
        connectError={connectError}
        connectRefused={connectRefused}
        currentAccount={currentAccount}
        signResponse={signResponse}
      />
      <WalletOverviewCardActions connectWallet={connectWallet} currentAccount={currentAccount} onSign={onSign} onSwitchChain={onSwitchChain} />
    </Card>
  )
}
