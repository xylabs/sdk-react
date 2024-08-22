import { InfuraProvider } from 'ethers'
import { useMemo } from 'react'

import { infuraKey } from './Infura.tsx'

export const useInfuraProvider = (chainId?: number) => {
  const { provider, providerName } = useMemo(() => {
    const provider = new InfuraProvider(chainId, infuraKey)
    const providerName = 'Infura (Default)'
    return { provider, providerName }
  }, [chainId])

  return { provider, providerName }
}
