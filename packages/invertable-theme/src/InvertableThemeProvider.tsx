import { responsiveFontSizes, ScopedCssBaseline, Theme, ThemeProvider } from '@mui/material'
import { createTheme, ThemeOptions } from '@mui/material/styles'
import cloneDeep from 'lodash/cloneDeep'
import merge from 'lodash/merge'

import { InvertableThemeContext } from './InvertableThemeContext'
import { InvertableThemeProviderProps } from './InvertableThemeProviderProps'
import { useInvertableThemeProvider } from './use'

export const resolveThemeColors = (options: ThemeOptions) => {
  const theme = createTheme(options)
  return merge({}, cloneDeep(options), {
    palette: {
      text: {
        primary: theme.palette?.getContrastText(theme.palette.primary.main),
        secondary: theme.palette?.getContrastText(theme.palette.secondary.main),
      },
    },
  })
}

export const InvertableThemeProvider: React.FC<InvertableThemeProviderProps> = ({
  options,
  children,
  dark,
  resolve = false,
  scoped = false,
  invert = false,
  noResponsiveFonts,
  // eslint-disable-next-line deprecation/deprecation
  darkTheme,
  darkOptions,
  lightOptions,
}) => {
  const parentContext = useInvertableThemeProvider()
  const clonedOptions = cloneDeep(options ?? parentContext.options ?? {})
  const clonedDarkOptions = cloneDeep(darkOptions ?? darkTheme ?? parentContext.darkOptions)
  const clonedLightOptions = cloneDeep(lightOptions ?? parentContext.lightOptions)

  clonedOptions.palette = clonedOptions.palette ?? {}

  if (invert) {
    clonedOptions.palette.mode = clonedOptions.palette.mode === 'dark' ? 'light' : 'dark'
  }

  if (dark !== undefined) {
    clonedOptions.palette.mode = dark ? 'dark' : 'light'
  }

  const modeOptions = clonedOptions.palette.mode === 'dark' ? clonedDarkOptions : clonedLightOptions

  let themeOptions = merge({}, clonedOptions, modeOptions)

  if (resolve) {
    themeOptions = resolveThemeColors(themeOptions)
  }

  const theme: Theme = noResponsiveFonts ? createTheme(themeOptions) : responsiveFontSizes(createTheme(themeOptions))

  const Provider: React.FC = () => {
    return (
      <InvertableThemeContext.Provider value={{ darkOptions: clonedDarkOptions, lightOptions: clonedLightOptions, options: clonedOptions }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </InvertableThemeContext.Provider>
    )
  }

  return scoped ? (
    <ScopedCssBaseline>
      <Provider />
    </ScopedCssBaseline>
  ) : (
    <Provider />
  )
}
