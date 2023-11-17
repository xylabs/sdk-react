import { Listener } from '@ethersproject/providers'
import { EthAddress } from '@xylabs/eth-address'
import { useAsyncEffect } from '@xylabs/react-async-effect'
import { useEffect, useState } from 'react'

import { MetaMaskConnector } from '../../wallets'

export const useCurrentAddress = (metamaskConnector: MetaMaskConnector, enabled?: boolean) => {
  const [currentAddress, setCurrentAddress] = useState<EthAddress>()

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      const defaultAddress = await metamaskConnector.currentAddress()
      setCurrentAddress((currentAddress) => (currentAddress === undefined && defaultAddress ? defaultAddress : undefined))
    },
    [metamaskConnector],
  )

  // watch for changes
  useEffect(() => {
    const accountsChangedListener: Listener = (accounts: string[]) => {
      // setConnectError(undefined)
      if (accounts.length > 0) {
        setCurrentAddress(EthAddress.fromString(accounts[0]))
      } else {
        setCurrentAddress(undefined)
      }
    }

    if (metamaskConnector) {
      metamaskConnector.onAccountsChanged(accountsChangedListener)
    }

    return () => {
      metamaskConnector.removeEIP11193Listener('accountsChanged', accountsChangedListener)
    }
  }, [enabled, metamaskConnector])

  return currentAddress
}
