import { BigNumber } from '@xylabs/bignumber'
import { ButtonExProps } from '@xylabs/react-button'
import { MouseEventHandler } from 'react'

export interface TokenAmountProps extends ButtonExProps {
  amount?: BigNumber | null
  label?: string
  logo?: boolean
  places?: number
  textFontFamily?: string
  textColor?: string
  statusColor?: string
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
}
