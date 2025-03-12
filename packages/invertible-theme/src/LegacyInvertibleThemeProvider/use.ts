import { use } from 'react'

import { InvertibleThemeContext } from './InvertibleThemeContext.tsx'

/** @deprecated use useColorSchemeEx instead */
export const useInvertibleThemeProvider = () => {
  return use(InvertibleThemeContext)
}
