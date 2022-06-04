import { FormControl, FormLabel, Switch } from '@mui/material'
import { BusyBoxProps, FlexRow } from '@xylabs/react-flexbox'
import { useContext } from 'react'

import { DebugUserEventsContext } from '../../contexts'

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
