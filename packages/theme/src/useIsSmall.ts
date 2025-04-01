import { useMediaQuery, useTheme } from '@mui/material'

export const useIsSmall = () => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down('md'))
}
