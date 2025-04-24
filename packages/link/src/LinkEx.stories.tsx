import type { Meta, StoryFn } from '@storybook/react'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import { UserEventsProvider, XyoUserEventHandler } from '@xylabs/react-pixel'
import { ColorSchemeButton } from '@xylabs/react-theme'
import React from 'react'

import { LinkEx } from './LinkEx.tsx'

const StorybookEntry = {
  argTypes: {},
  component: LinkEx,
  parameters: { docs: { page: null } },
  title: 'link/LinkEx',
} as Meta<typeof LinkEx>

const DefaultTemplate: StoryFn<typeof LinkEx> = args => (
  <FlexRow justifyContent="flex-start">
    <FlexCol marginX={1}>
      <LinkEx {...args}>Default</LinkEx>
    </FlexCol>
    <ColorSchemeButton />
  </FlexRow>
)

const UserEventTemplate: StoryFn<typeof LinkEx> = args => (
  <UserEventsProvider userEvents={XyoUserEventHandler.get()}>
    <FlexRow justifyContent="flex-start">
      <FlexCol marginX={1}>
        <LinkEx {...args}>Default</LinkEx>
      </FlexCol>
    </FlexRow>
  </UserEventsProvider>
)

const Default = DefaultTemplate.bind({})
Default.args = {}

const Href = DefaultTemplate.bind({})
Href.args = { href: 'https://xylabs.com' }

const HrefTarget = DefaultTemplate.bind({})
HrefTarget.args = { href: 'https://xylabs.com', target: '_blank' }

const HrefTargetOnClick = DefaultTemplate.bind({})
HrefTargetOnClick.args = {
  href: 'https://xylabs.com', target: '_blank', onClick: () => console.log('Clicked'),
}

const HrefTargetWithEvents = UserEventTemplate.bind({})
HrefTargetWithEvents.args = { href: 'https://xylabs.com', target: '_blank' }

const HrefTargetOnClickWithEvents = UserEventTemplate.bind({})
HrefTargetOnClickWithEvents.args = {
  href: 'https://xylabs.com', target: '_blank', onClick: () => console.log('Clicked'),
}

export {
  Default, Href, HrefTarget, HrefTargetOnClick, HrefTargetOnClickWithEvents,
  HrefTargetWithEvents,
}

export default StorybookEntry
