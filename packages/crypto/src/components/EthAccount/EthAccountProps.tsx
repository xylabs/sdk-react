import { EthAddress } from '@xylabs/eth-address'

interface EthAccountProps {
  address?: EthAddress | null
  addressLength?: 'auto' | 'short' | 'long'
  fontFamily?: string
  full?: boolean
  icon?: boolean

  iconOnly?: boolean
  iconSize?: number
  shortenedLength?: number
  toEtherScan?: boolean
}

export type { EthAccountProps }
