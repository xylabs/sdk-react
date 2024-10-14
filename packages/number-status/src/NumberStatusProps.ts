import type { ButtonExProps } from '@xylabs/react-button'

type NumberStatusProps = ButtonExProps & {
  autoWidth?: boolean
  error?: Error
  fontSize?: number
  format?: string
  rounded?: boolean
  shorten?: string | boolean
  title?: string
  value?: number | string
  width?: number
}

export type { NumberStatusProps }
