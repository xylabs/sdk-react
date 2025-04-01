import { useColorScheme } from '@mui/material'

export const useIsDark = () => {
  const colorScheme = useColorScheme()
  return colorScheme.mode === 'system' ? colorScheme.systemMode === 'dark' : colorScheme.mode === 'dark'
}
