import React, { forwardRef } from 'react'

import { BusyBox } from './BusyBox/index.ts'
import type { FlexBoxProps } from './FlexBoxProps.tsx'

const FlexCol = ({ ref, ...props }: FlexBoxProps & { ref?: React.RefObject<unknown | null> }) => {
  return <BusyBox alignItems="center" display="flex" flexDirection="column" justifyContent="center" ref={ref} {...props} />
}

FlexCol.displayName = 'FlexColXYLabs'

const FlexGrowCol = ({ ref, ...props }: FlexBoxProps & { ref?: React.RefObject<unknown | null> }) => {
  return <FlexCol flexGrow={1} ref={ref} {...props} />
}

FlexGrowCol.displayName = 'FlexGrowColXYLabs'

export { FlexCol, FlexGrowCol }
