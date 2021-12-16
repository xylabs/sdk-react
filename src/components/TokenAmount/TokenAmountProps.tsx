import { BigNumber } from '@xylabs/sdk-js'
import { MouseEventHandler } from 'react'

import { ButtonExProps } from '../ButtonEx'

interface TokenAmountProps extends ButtonExProps {
  amount?: BigNumber | null
  label?: string
  logo?: boolean
  places?: number
  textFontFamily?: string
  textColor?: string
  statusColor?: string
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
}

export type { TokenAmountProps }
