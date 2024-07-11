import { useContext } from 'react'

import { InvertibleThemeContext } from './InvertibleThemeContext.jsx'

export const useInvertibleThemeProvider = () => {
  return useContext(InvertibleThemeContext)
}
