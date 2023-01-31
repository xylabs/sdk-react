import { useContext } from 'react'

import { InvertibleThemeContext } from './InvertibleThemeContext'

export const useInvertibleThemeProvider = () => {
  return useContext(InvertibleThemeContext)
}
