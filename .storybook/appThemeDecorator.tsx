import { DecoratorFn } from '@storybook/react'
import { InvertableThemeProvider } from '@xylabs/react-common'

import { useDarkMode } from 'storybook-dark-mode'

const appThemeDecorator: DecoratorFn = (Story, { args }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const darkMode = useDarkMode()

  return (
    <InvertableThemeProvider dark={darkMode} options={{}}>
      <Story {...args} />
    </InvertableThemeProvider>
  )
}

export { appThemeDecorator }
