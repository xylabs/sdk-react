import type { PropsWithChildren } from 'react'
import React, { useMemo, useState } from 'react'

import type { ProvidedContextExState } from '../contextEx/index.ts'
import { CollapsibleContext } from './context.ts'
import type { CollapsibleState } from './State.ts'

export interface CollapsibleProviderProps extends PropsWithChildren {
  defaultCollapse?: boolean
  defaultCollapseEnd?: boolean
}

export const CollapsibleProvider: React.FC<CollapsibleProviderProps> = ({
  defaultCollapse = false, defaultCollapseEnd = false, children,
}) => {
  const [collapse, setCollapse] = useState(() => defaultCollapse)
  const [collapseEnd, setCollapseEnd] = useState(() => defaultCollapseEnd)

  const value = useMemo(() => {
    const value: ProvidedContextExState<CollapsibleState> = {
      collapse, collapseEnd, provided: true, setCollapse, setCollapseEnd,
    }
    return value
  }, [collapse, collapseEnd])

  return (
    <CollapsibleContext value={value}>
      {children}
    </CollapsibleContext>
  )
}
