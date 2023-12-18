import * as chains from '@wagmi/chains'

export const findChainName = (chainId: number) => Object.values(chains).find((chain) => chain.id === chainId)
