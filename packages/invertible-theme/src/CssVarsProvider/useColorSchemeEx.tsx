import { useColorScheme } from '@mui/material'
import { useMemo } from 'react'

export const useColorSchemeEx = () => {
  const { mode, setMode, systemMode } = useColorScheme()

  const state = useMemo(
    () => ({
      darkMode: mode === 'dark' || systemMode === 'dark',
      lightMode: mode === 'light' || systemMode === 'light',
      mode,
      setMode,
      systemMode: mode === 'system',
    }),
    [mode, setMode, systemMode],
  )

  return state
}
