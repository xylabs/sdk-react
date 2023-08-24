import { useColorScheme } from '@mui/material'
import { useMemo } from 'react'

// A hook with a similar interface to the darkMode app setting to make migrating easier.
export const useColorSchemeEx = () => {
  const { mode, setMode } = useColorScheme()

  const state = useMemo(
    () => ({
      darkMode: mode === 'dark',
      lightMode: mode === 'light',
      mode,
      setMode,
      systemMode: mode === 'system',
    }),
    [mode, setMode],
  )

  return state
}
