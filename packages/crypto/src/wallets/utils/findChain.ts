// eslint-disable-next-line import/no-internal-modules
import { arbitrum, base, mainnet, optimism, polygon } from 'viem/chains'

const chains = [mainnet, polygon, arbitrum, optimism, base]

export const findChainName = (chainId: number) => chains.find((chain) => chain.id === chainId)
