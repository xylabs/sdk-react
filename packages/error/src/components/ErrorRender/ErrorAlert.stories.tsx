import { Typography } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ErrorAlert } from './ErrorAlert.tsx'

const StorybookEntry: Meta = {
  argTypes: {},
  component: ErrorAlert,
  parameters: { docs: { page: null } },
  title: 'error/ErrorAlert',
}

const Template: StoryFn<typeof ErrorAlert> = (props) => {
  return <ErrorAlert {...props} />
}

const Default = Template.bind({})
Default.args = {}

const WithTitle = Template.bind({})
WithTitle.args = { title: 'Oh No!' }

const WithError = Template.bind({})
WithError.args = { error: 'An error happened' }

const WithScope = Template.bind({})
WithScope.args = { scope: 'Storybook' }

const WithErrorAndScope = Template.bind({})
WithErrorAndScope.args = { error: 'An error happened', scope: 'Storybook' }

const WithErrorAndScopeAndTitle = Template.bind({})
WithErrorAndScopeAndTitle.args = {
  error: 'An error happened', scope: 'Storybook', title: 'Oh No!',
}

const WithErrorAndAdditionalMessaging = Template.bind({})
WithErrorAndAdditionalMessaging.args = {
  error: 'An error happened',
  scope: 'Storybook',
  title: 'Oh No!',
  additionalMessaging: <Typography variant="caption">Please try your request again later.</Typography>,
}

export {
  Default, WithError, WithErrorAndAdditionalMessaging, WithErrorAndScope, WithErrorAndScopeAndTitle, WithScope, WithTitle,
}

export default StorybookEntry
