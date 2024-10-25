import type { FlexBoxProps } from '@xylabs/react-flexbox'
import type { ReactNode } from 'react'
import type { Location } from 'react-router-dom'

import type { ErrorEx } from '../ErrorEx.ts'

export interface ErrorRenderProps<T = void> extends FlexBoxProps {
  customError?: ReactNode
  error?: ErrorEx<T>
  errorContext?: string
  noErrorDisplay?: boolean
  noReAuth?: boolean
  onCancel?: () => void
  scope?: string
  useLocation?: () => Location
}
