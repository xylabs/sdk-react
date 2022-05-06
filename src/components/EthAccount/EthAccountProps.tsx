import { EthAddress } from '@xylabs/sdk-js'

interface EthAccountProps {
  address?: EthAddress | null
  addressLength?: 'auto' | 'short' | 'long'
  shortenedLength?: number
  full?: boolean
  icon?: boolean
  iconSize?: number
  iconOnly?: boolean
  toEtherScan?: boolean
  fontFamily?: string
}

export type { EthAccountProps }
