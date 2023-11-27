import { useEffect, useState } from 'react'

import { isEIP6963AnnounceProviderEvent } from '../../../lib'
import { DiscoveredWallets } from '../lib'

export const useWalletDiscovery = () => {
  const [discoveredWallets, setDiscoveredWallets] = useState<DiscoveredWallets>({})

  useEffect(() => {
    const listener = (event: Event) => {
      if (isEIP6963AnnounceProviderEvent(event)) {
        const { info, provider } = event.detail
        // capture installed wallets as they come in
        setDiscoveredWallets((previous) => ({
          [info.rdns]: {
            info,
            provider,
          },
          ...previous,
        }))
      }
    }

    // listen when providers announce themselves
    window.addEventListener('eip6963:announceProvider', listener)

    // dispatch an event to ask all installed providers to identify themselves
    window.dispatchEvent(new Event('eip6963:requestProvider'))

    return () => {
      // clean up listener
      window.removeEventListener('eip6963:announceProvider', listener)
    }
  }, [])

  return discoveredWallets
}
