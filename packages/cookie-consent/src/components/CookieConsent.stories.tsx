import { Meta, StoryFn } from '@storybook/react'
import { ButtonEx } from '@xylabs/react-button'
import { FlexRow } from '@xylabs/react-flexbox'
import React from 'react'

import { CookieConsentLoader, useCookieConsent } from '../contexts/index.ts'
import { CookieConsent } from './CookieConsent.tsx'
import { CookieConsentProps } from './CookieConsentProps.tsx'

const Inner: React.FC<CookieConsentProps> = (args) => {
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

const TemplateWithContext: StoryFn<typeof CookieConsent> = (args) => {
  return (
    <CookieConsentLoader>
      <Inner {...args} />
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

export default StorybookEntry
