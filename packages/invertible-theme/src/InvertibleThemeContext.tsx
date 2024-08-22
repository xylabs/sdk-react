import { createContext } from 'react'

import type { InvertibleTheme } from './InvertibleTheme.tsx'

const InvertibleThemeContext = createContext<InvertibleTheme>({ options: {} })

export { InvertibleThemeContext }
