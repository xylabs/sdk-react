import { createContext } from 'react'

import { InvertibleTheme } from './InvertibleTheme.tsx'

const InvertibleThemeContext = createContext<InvertibleTheme>({
  options: {},
})

export { InvertibleThemeContext }
