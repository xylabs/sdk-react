import React from 'react'

import { BusyBox } from './BusyBox/index.ts'
import type { FlexBoxProps } from './FlexBoxProps.tsx'

const FlexRow: React.FC<FlexBoxProps> = ({ ref, ...props }) => {
  return <BusyBox alignItems="center" display="flex" flexDirection="row" justifyContent="center" ref={ref} {...props} />
}

FlexRow.displayName = 'FlexRowXYLabs'

const FlexGrowRow: React.FC<FlexBoxProps> = ({ ref, ...props }: FlexBoxProps) => {
  return <FlexRow flexGrow={1} ref={ref} {...props} />
}

FlexGrowRow.displayName = 'FlexGrowRowXYLabs'

export { FlexGrowRow, FlexRow }
