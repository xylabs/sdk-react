import { useContext } from 'react'

import { InvertibleThemeContext } from './InvertibleThemeContext.tsx'

export const useInvertibleThemeProvider = () => {
  return useContext(InvertibleThemeContext)
}
