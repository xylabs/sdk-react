import { EthAddressWrapper } from '@xylabs/eth-address'
import { useMemo } from 'react'

import type { EthWalletConnectorBase } from '../classes/index.ts'
import { useCurrentAccountExternal } from './useCurrentAccountExternal.ts'

export const useCurrentAccount = (ethWalletConnector?: EthWalletConnectorBase): [EthAddressWrapper | undefined, string[]] => {
  const addresses = useCurrentAccountExternal(ethWalletConnector)

  /**
   * According to the metamask docs, the first account is considered their 'selected account'
   *
   * see - https://docs.metamask.io/wallet/how-to/connect/access-accounts/#handle-accounts
   */
  const [currentAddress, additionalAddresses] = useMemo(() => {
    return addresses?.length > 0 ? [EthAddressWrapper.fromString(addresses[0]), addresses.slice(1)] : [undefined, []]
  }, [addresses])

  if (ethWalletConnector?.installed) {
    return [currentAddress, additionalAddresses]
  }
  return [undefined, []]
}
