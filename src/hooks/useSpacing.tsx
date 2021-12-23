import { useTheme } from '@mui/material'

export const useSpacing = (value: string | number) => {
  const theme = useTheme()
  return theme.spacing(typeof value === 'string' ? parseInt(value) : value)
}
