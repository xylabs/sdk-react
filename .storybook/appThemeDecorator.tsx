import { DecoratorFn } from '@storybook/react'
import { InvertibleThemeProvider } from '@xylabs/react-invertible-theme'

import { useDarkMode } from 'storybook-dark-mode'

const appThemeDecorator: DecoratorFn = (Story, { args }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const darkMode = useDarkMode()

  return (
    <InvertibleThemeProvider dark={darkMode} options={{}}>
      <Story {...args} />
    </InvertibleThemeProvider>
  )
}

export { appThemeDecorator }
