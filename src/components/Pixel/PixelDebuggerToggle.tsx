import { useLocalStorage } from '../../hooks'
import { BusyBoxProps, FlexCol, FlexRow } from '../FlexBox'
import { Portal } from '../Portal'
import { PixelDebugger } from './PixelDebugger'
import { FormControl, FormLabel, Switch } from '@mui/material'

export const PixelDebuggerToggle: React.FC<BusyBoxProps> = ({ ...props }) => {
  const [showDebugger, setDebugger] = useLocalStorage<boolean>('isDebuggingPixel', false)

  return (
    <FlexRow {...props}>
      <FormControl>
        <FormLabel>Enable Debugger</FormLabel>
        <Switch checked={showDebugger} onClick={() => setDebugger(!showDebugger)} />
      </FormControl>
      {showDebugger && (
        <Portal target="#pixelPortal">
          <PixelDebugger />
        </Portal>
      )}
    </FlexRow>
  )
}
