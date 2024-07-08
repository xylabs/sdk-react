import { ButtonExProps } from '@xylabs/react-button'
import { MouseEventHandler } from 'react'

export interface TokenAmountProps extends ButtonExProps {
  amount?: bigint | null
  label?: string
  logo?: boolean
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
  places?: number
  statusColor?: string
  textColor?: string
  textFontFamily?: string
}
