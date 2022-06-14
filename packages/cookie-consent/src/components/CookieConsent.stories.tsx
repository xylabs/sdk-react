import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonEx } from '@xylabs/react-button'
import { FlexRow } from '@xylabs/react-flexbox'

import { CookieConsentLoader, useCookieConsent } from '../contexts'
import { CookieConsent } from './CookieConsent'

const StorybookEntry = {
  argTypes: {},
  component: CookieConsent,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'cookie-consent/CookieConsent',
} as ComponentMeta<typeof CookieConsent>

const TemplateWithContext: ComponentStory<typeof CookieConsent> = (args) => {
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

const TemplateWithoutContext: ComponentStory<typeof CookieConsent> = (args) => {
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

export { WithContext, WithoutContext }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
