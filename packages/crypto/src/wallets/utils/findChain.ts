import * as chains from '@wagmi/chains'

export const findChainName = (chainId: number) => Object.values(chains).filter((chain) => chain.id === chainId)[0]
