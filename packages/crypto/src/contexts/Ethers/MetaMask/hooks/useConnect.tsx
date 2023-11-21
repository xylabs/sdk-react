import { isError, JsonRpcError } from 'ethers'
import { useCallback, useState } from 'react'

import { MetaMaskConnector } from '../../wallets'

export const useConnectMetaMask = (metamaskConnector: MetaMaskConnector) => {
  const [connectRefused, setConnectRefused] = useState(false)
  const [connectError, setConnectError] = useState<Error>()

  const connect = useCallback(async () => {
    try {
      const accounts = await metamaskConnector.requestAccounts()
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
  }, [metamaskConnector])

  return { connect, connectError, connectRefused }
}
