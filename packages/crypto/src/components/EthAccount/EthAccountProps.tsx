import type { EthAddressWrapper } from '@xylabs/sdk-js'

interface EthAccountProps {
  address?: EthAddressWrapper | null
  addressLength?: 'auto' | 'short' | 'long'
  fontFamily?: string
  full?: boolean
  icon?: boolean
  iconOnly?: boolean
  iconSize?: number
  removeMargin?: boolean
  shortenedLength?: number
  toEtherScan?: boolean
}

export type { EthAccountProps }
