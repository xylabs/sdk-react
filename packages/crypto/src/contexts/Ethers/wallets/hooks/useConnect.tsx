import { isError, JsonRpcError } from 'ethers'
import { useCallback, useState } from 'react'

import { EthWalletConnectorBase } from '../../wallets'

export const useConnectMetaMask = (ethWalletConnector: EthWalletConnectorBase) => {
  const [connectRefused, setConnectRefused] = useState(false)
  const [connectError, setConnectError] = useState<Error>()

  const connectWallet = useCallback(async () => {
    try {
      const accounts = await ethWalletConnector.requestAccounts()
      setConnectRefused(false)
      setConnectError(undefined)
      // We could have multiple accounts. Check for one.
      if (accounts && accounts?.length !== 0) {
        console.log('Connected: ', accounts[0])
      } else {
        console.log('No authorized account found.')
      }
      return accounts
    } catch (e) {
      if (isError(e, 'ACTION_REJECTED')) {
        const error = (e.info as JsonRpcError | undefined)?.error
        if (error?.code === 4001) {
          setConnectRefused(true)
          setConnectError(new Error(error.message))
        }
      }
    }
  }, [ethWalletConnector])

  return { connectError, connectRefused, connectWallet }
}
