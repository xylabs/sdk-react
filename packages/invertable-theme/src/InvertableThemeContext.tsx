import { createContext } from 'react'

import { InvertableTheme } from './InvertableTheme'

const InvertableThemeContext = createContext<InvertableTheme>({
  options: {},
})

export { InvertableThemeContext }
