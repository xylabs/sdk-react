import { createContext } from 'react'

import type { InvertibleTheme } from './InvertibleTheme.tsx'

/** @deprecated switch to InvertibleMuiThemeProvider which does not require this */
export const InvertibleThemeContext = createContext<InvertibleTheme>({ options: {} })
