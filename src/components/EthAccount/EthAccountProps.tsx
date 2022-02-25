import { EthAddress } from '@xylabs/sdk-js'
import { MouseEventHandler } from 'react'

import { ButtonExProps } from '../ButtonEx'

interface EthAccountProps extends ButtonExProps {
  address?: EthAddress | null
  addressLength?: 'auto' | 'short' | 'long'
  shortenedLength?: number
  full?: boolean
  icon?: boolean
  iconSize?: number
  iconOnly?: boolean
  text?: boolean
  page?: string
  toEtherScan?: boolean
  fontFamily?: string
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
}

export type { EthAccountProps }
