import { SupportAgent } from '@mui/icons-material'
import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ErrorRenderWithSupport } from './ErrorRenderWithSupport.tsx'

const StorybookEntry: Meta = {
  argTypes: {},
  component: ErrorRenderWithSupport,
  parameters: { docs: { page: null } },
  title: 'error/ErrorRenderWithSupport',
}

const Template: StoryFn<typeof ErrorRenderWithSupport> = (props) => {
  return <ErrorRenderWithSupport {...props} />
}

const Default = Template.bind({})
Default.args = {}

const WithError = Template.bind({})
WithError.args = {
  error: new Error('An error occurred. We cannot control how long the message goes so wrapping might be the best option'),
  scope: 'A:long:scope:that:might:get:cut:off',
}

const WithErrorAndSupport = Template.bind({})
WithErrorAndSupport.args = {
  error: new Error('An error occurred'),
  supportHref: 'https://google.com',
  supportLinkText: 'Support',
}

const WithErrorAndOnCancel = Template.bind({})
WithErrorAndOnCancel.args = {
  error: new Error('An error occurred'),
  onCancel: () => alert('Cancelled'),
}

const WithErrorAndSlotsAndSupport = Template.bind({})
WithErrorAndSlotsAndSupport.args = {
  error: new Error('An error occurred'),
  supportHref: 'https://google.com',
  supportIcon: <SupportAgent />,
  supportLinkTitle: 'Get Help',
  slotProps: { alert: { additionalMessaging: 'Additional messaging' } },
}

export {
  Default, WithError, WithErrorAndOnCancel,
  WithErrorAndSlotsAndSupport,
  WithErrorAndSupport,
}

export default StorybookEntry
