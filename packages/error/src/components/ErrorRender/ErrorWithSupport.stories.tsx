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
WithError.args = { error: new Error('An error occurred') }

const WithErrorAndSupport = Template.bind({})
WithErrorAndSupport.args = {
  error: new Error('An error occurred'), supportHref: 'https://google.com', supportLinkText: 'Support',
}

const WithErrorAndOnCancel = Template.bind({})
WithErrorAndOnCancel.args = {
  error: new Error('An error occurred'),
  onCancel: () => alert('Cancelled'),
}

export {
  Default, WithError, WithErrorAndOnCancel,
  WithErrorAndSupport,
}

export default StorybookEntry
