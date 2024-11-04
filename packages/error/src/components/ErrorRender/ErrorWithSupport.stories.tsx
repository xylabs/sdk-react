import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ErrorRenderWithSupport } from './ErrorWithSupport.tsx'

const StorybookEntry: Meta = {
  argTypes: {},
  component: ErrorRenderWithSupport,
  parameters: { docs: { page: null } },
  title: 'error/ErrorWithSupport',
}

const Template: StoryFn<typeof ErrorRenderWithSupport> = (props) => {
  return <ErrorRenderWithSupport {...props} />
}

const Default = Template.bind({})
Default.args = {}

const WithError = Template.bind({})
WithError.args = { error: new Error('An error occurred') }

const WithErrorAndSupport = Template.bind({})
WithError.args = {
  error: new Error('An error occurred'), supportHref: 'https://google.com', supportLinkText: 'Test Link Text for google.com',
}

const WithErrorAndSupportOnCancel = Template.bind({})
WithError.args = {
  error: new Error('An error occurred'),
  supportHref: 'https://google.com',
  supportLinkText: 'Test Link Text for google.com',
  onCancel: () => alert('Cancelled'),
}

export {
  Default, WithError, WithErrorAndSupport, WithErrorAndSupportOnCancel,
}

export default StorybookEntry
