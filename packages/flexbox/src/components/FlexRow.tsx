import { forwardRef } from 'react'

import { BusyBox } from './BusyBox'
import { FlexBoxProps } from './FlexBoxProps'

const FlexRow = forwardRef<unknown, FlexBoxProps>((props, ref) => {
  return <BusyBox alignItems="center" display="flex" flexDirection="row" justifyContent="center" ref={ref} {...props} />
})

FlexRow.displayName = 'FlexRow [XY Labs]'

const FlexGrowRow = forwardRef<unknown, FlexBoxProps>((props, ref) => {
  return <FlexRow flexGrow={1} ref={ref} {...props} />
})

FlexGrowRow.displayName = 'FlexGrowRow [XY Labs]'

export { FlexGrowRow, FlexRow }
