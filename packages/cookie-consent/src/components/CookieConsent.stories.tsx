import { Meta, StoryFn } from '@storybook/react'
import { ButtonEx } from '@xylabs/react-button'
import { FlexRow } from '@xylabs/react-flexbox'

import { CookieConsentLoader, useCookieConsent } from '../contexts'
import { CookieConsent } from './CookieConsent'

const TemplateWithContext: StoryFn<typeof CookieConsent> = (args) => {
  const Inner: React.FC = () => {
    const { clearAccepted } = useCookieConsent()
    return (
      <FlexRow>
        <ButtonEx
          variant="contained"
          onClick={() => {
            clearAccepted?.()
          }}
        >
          Clear Local Storage
        </ButtonEx>
        <CookieConsent {...args}></CookieConsent>
      </FlexRow>
    )
  }

  return (
    <CookieConsentLoader>
      <Inner />
    </CookieConsentLoader>
  )
}

const TemplateWithoutContext: StoryFn<typeof CookieConsent> = (args) => {
  return (
    <FlexRow>
      <CookieConsent {...args}></CookieConsent>
    </FlexRow>
  )
}

const WithContext = TemplateWithContext.bind({})
WithContext.args = {
  title: 'With Context',
}

const WithoutContext = TemplateWithoutContext.bind({})
WithoutContext.args = {
  title: 'Without Context',
}

const StorybookEntry = {
  argTypes: {},
  component: CookieConsent,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'cookie-consent/CookieConsent',
} as Meta<typeof CookieConsent>

export { WithContext, WithoutContext }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
