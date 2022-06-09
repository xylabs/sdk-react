import { useContext } from 'react'

import { InvertableThemeContext } from './InvertableThemeContext'

export const useInvertableThemeProvider = () => {
  return useContext(InvertableThemeContext)
}
