import { FormControl, FormLabel, Switch } from '@mui/material'
import { BusyBoxProps, FlexRow } from '@xylabs/react-flexbox'
import { DebugUserEventsContext } from '@xylabs/react-pixel'
import React, { useContext } from 'react'

export const PixelDebuggerToggle: React.FC<BusyBoxProps> = ({ ...props }) => {
  const { setIsDebugging, isDebugging } = useContext(DebugUserEventsContext)

  return (
    <FlexRow {...props}>
      <FormControl>
        <FormLabel>Enable Debugger</FormLabel>
        <Switch checked={isDebugging} onClick={() => setIsDebugging(!isDebugging)} />
      </FormControl>
    </FlexRow>
  )
}
