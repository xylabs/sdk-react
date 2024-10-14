import type { ButtonExProps } from '@xylabs/react-button'
import type { MouseEventHandler } from 'react'

export type TokenAmountProps = ButtonExProps & {
  amount?: bigint | null
  label?: string
  logo?: boolean
  onButtonClick?: MouseEventHandler<HTMLButtonElement>
  places?: number
  statusColor?: string
  textColor?: string
  textFontFamily?: string
}
