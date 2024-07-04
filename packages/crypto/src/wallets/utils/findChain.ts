// eslint-disable-next-line import/no-internal-modules
import chains from 'viem/chains'

export const findChainName = (chainId: number) => Object.values(chains).find((chain) => chain.id === chainId)
