import { forwardRef } from 'react'

import { BusyBox } from './BusyBox'
import { FlexBoxProps } from './FlexBoxProps'

const FlexCol = forwardRef<unknown, FlexBoxProps>((props, ref) => {
  return <BusyBox alignItems="center" display="flex" flexDirection="column" justifyContent="center" ref={ref} {...props} />
})

FlexCol.displayName = 'FlexColXYLabs'

const FlexGrowCol = forwardRef<unknown, FlexBoxProps>((props, ref) => {
  return <FlexCol flexGrow={1} ref={ref} {...props} />
})

FlexGrowCol.displayName = 'FlexGrowColXYLabs'

export { FlexCol, FlexGrowCol }
