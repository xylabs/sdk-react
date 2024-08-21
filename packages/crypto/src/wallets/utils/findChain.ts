import {
  arbitrum, base, mainnet, optimism, polygon,
// eslint-disable-next-line import-x/no-internal-modules
} from 'viem/chains'

const chains = [mainnet, polygon, arbitrum, optimism, base]

export const findChainName = (chainId: number) => chains.find(chain => chain.id === chainId)
