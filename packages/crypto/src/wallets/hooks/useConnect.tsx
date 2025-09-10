import type { JsonRpcError } from 'ethers'
import { isError } from 'ethers'
import { useCallback, useState } from 'react'

import type { EthWalletConnectorBase } from '../classes/index.ts'

const checkAccounts = (accounts: string[] | null | undefined) => {
  // We could have multiple accounts. Check for one.
  if (accounts && accounts?.length !== 0) {
    console.log('Connected:', accounts[0])
    return accounts
  } else {
    console.log('No authorized account found.')
  }
}

const handleActionRejected = (e: unknown, rejectCallback: (e: JsonRpcError['error']) => void) => {
  if (isError(e, 'ACTION_REJECTED')) {
    const error = (e.info as JsonRpcError | undefined)?.error
    if (error?.code === 4001) {
      rejectCallback(error)
    }
  }
}

/** Initiate a connection to the passed in wallet */
export const useConnectWallet = (ethWalletConnector?: EthWalletConnectorBase) => {
  const [connectRefused, setConnectRefused] = useState(false)
  const [connectError, setConnectError] = useState<Error>()

  const connectWallet = useCallback(async () => {
    if (!ethWalletConnector) return
    try {
      const accounts = await ethWalletConnector?.connectWallet()
      setConnectRefused(false)
      setConnectError(undefined)
      return checkAccounts(accounts)
    } catch (e) {
      handleActionRejected(e, (error) => {
        setConnectRefused(true)
        setConnectError(new Error(error.message))
      })
    }
  }, [ethWalletConnector])

  if (ethWalletConnector?.installed) {
    return {
      connectError, connectRefused, connectWallet,
    }
  }
  return {}
}
