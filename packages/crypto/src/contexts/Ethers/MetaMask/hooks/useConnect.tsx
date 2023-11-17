import { Web3Provider } from '@ethersproject/providers'
import { useCallback, useState } from 'react'

export const useConnectMetaMask = (walletProvider?: Web3Provider): [() => Promise<string[] | undefined>, boolean, Error | undefined] => {
  const [connectRefused, setConnectRefused] = useState(false)
  const [connectError, setConnectError] = useState<Error>()

  const connect = useCallback(async () => {
    try {
      const accounts = await walletProvider?.send('eth_requestAccounts', [])
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
      setConnectError(e as Error)
      if ((e as { code: number }).code === 4001) setConnectRefused(true)
    }
  }, [walletProvider])

  return [connect, connectRefused, connectError]
}
