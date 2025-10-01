import {
  arbitrum, base, mainnet, optimism, polygon, sepolia,
} from 'viem/chains'

const chains = [mainnet, polygon, arbitrum, optimism, base, sepolia]

export const findChainName = (chainId: number) => chains.find(chain => chain.id === chainId)
