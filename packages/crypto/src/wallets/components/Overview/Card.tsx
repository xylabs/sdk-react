import type { CardProps } from '@mui/material'
import { Card } from '@mui/material'
import type { Hex } from '@xylabs/hex'
import { ErrorRender } from '@xylabs/react-error'
import React, { useMemo, useState } from 'react'

import type { EIP6963Connector } from '../../classes/index.ts'
import { useEthWalletInstance } from '../../hooks/index.ts'
import { WalletOverviewCardActions } from './CardActions.tsx'
import { WalletOverviewCardContent } from './CardContent.tsx'
import { WalletOverviewCardHeader } from './CardHeader.tsx'
import {
  buildDomain, types, values,
} from './lib/index.ts'

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
    signTypedMessage,
    signerAddress,
    verifyTypedDataSignature,
  } = useEthWalletInstance(ethWalletConnector)

  const domain = useMemo(() => buildDomain(chainId), [chainId])
  const [signResponse, setSignResponse] = useState<string>()
  const [error, setError] = useState<Error>()
  const [validateTypedDataSignature, setValidateTypedDataSignature] = useState(false)

  useMemo(() => {
    setSignResponse(undefined)
  }, [signerAddress])

  const onSign = async () => {
    setSignResponse(undefined)
    setValidateTypedDataSignature(false)
    const signResult = await signMessage?.('test')
    setSignResponse(signResult)
  }

  const onSignTypedData = async () => {
    try {
      setError(undefined)
      setSignResponse(undefined)
      const signature = await signTypedMessage?.(domain, types, values)
      setSignResponse(signature)
      setValidateTypedDataSignature(true)
    } catch (err) {
      setValidateTypedDataSignature(false)
      setError(err as Error)
    }
  }

  const onSwitchChain = async () => {
    const mainnet = '0x1' as Hex
    const sepolia = '0xaa36a7' as Hex
    await (chainId === 1 ? ethWalletApiInstance.switchEthereumChain(sepolia) : ethWalletApiInstance.switchEthereumChain(mainnet))
  }

  return (
    <Card {...props}>
      <ErrorRender error={error} />
      <WalletOverviewCardHeader currentAccount={currentAccount} icon={providerInfo?.icon} walletName={providerName} />
      <WalletOverviewCardContent
        chainName={chainName}
        connectError={connectError}
        connectRefused={connectRefused}
        currentAccount={currentAccount}
        domain={domain}
        types={types}
        values={values}
        validateTypedDataSignature={validateTypedDataSignature}
        signResponse={signResponse}
        verifyTypedDataSignature={verifyTypedDataSignature}
      />
      <WalletOverviewCardActions
        connectWallet={connectWallet}
        currentAccount={currentAccount}
        onSign={onSign}
        onSignTypedData={onSignTypedData}
        onSwitchChain={onSwitchChain}
      />
    </Card>
  )
}
