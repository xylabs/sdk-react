import { createContext } from 'react'

import { InvertibleTheme } from './InvertibleTheme'

const InvertibleThemeContext = createContext<InvertibleTheme>({
  options: {},
})

export { InvertibleThemeContext }
