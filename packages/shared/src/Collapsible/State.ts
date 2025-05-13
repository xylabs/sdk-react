import type { Dispatch, SetStateAction } from 'react'

import type { ContextExState } from '../contextEx/index.ts'

export type CollapsibleState = ContextExState<{
  collapse?: boolean
  collapseEnd?: boolean
  setCollapse?: Dispatch<SetStateAction<boolean>>
  setCollapseEnd?: Dispatch<SetStateAction<boolean>>
}>
