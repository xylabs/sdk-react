import { createContext } from 'react'

import { InvertibleTheme } from './InvertibleTheme.jsx'

const InvertibleThemeContext = createContext<InvertibleTheme>({
  options: {},
})

export { InvertibleThemeContext }
