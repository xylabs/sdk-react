import { ButtonExProps } from '@xylabs/react-button'
import { MouseEventHandler } from 'react'

export interface TokenAmountProps extends ButtonExProps {
  amount?: string | number | null
  label?: string
  logo?: boolean
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
  places?: number
  statusColor?: string
  textColor?: string
  textFontFamily?: string
}
