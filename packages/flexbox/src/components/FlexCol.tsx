import React from 'react'

import { BusyBox } from './BusyBox/index.ts'
import type { FlexBoxProps } from './FlexBoxProps.tsx'

const FlexCol: React.FC<FlexBoxProps> = ({ ref, ...props }) => {
  return <BusyBox alignItems="center" display="flex" flexDirection="column" justifyContent="center" ref={ref} {...props} />
}

FlexCol.displayName = 'FlexColXYLabs'

const FlexGrowCol: React.FC<FlexBoxProps> = ({ ref, ...props }) => {
  return <FlexCol flexGrow={1} ref={ref} {...props} />
}

FlexGrowCol.displayName = 'FlexGrowColXYLabs'

export { FlexCol, FlexGrowCol }
