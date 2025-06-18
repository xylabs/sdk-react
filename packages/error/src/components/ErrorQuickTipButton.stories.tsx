import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import { ErrorQuickTipButton } from './ErrorQuickTipButton.tsx'

const StorybookEntry: Meta = {
  argTypes: {},
  component: ErrorQuickTipButton,
  parameters: { docs: { page: null } },
  title: 'error/QuickTipButton',
}

const Template: StoryFn<typeof ErrorQuickTipButton> = (props) => {
  return <ErrorQuickTipButton {...props} />
}

const Default = Template.bind({})
Default.args = {}

const WithData = Template.bind({})
WithData.args = {
  boundWitnessType: 'Block Bound Witness',
  errors: [
    new Error('Error 1'),
    new Error('Error 2'),
  ],
  iconColors: true,
  validateError: new Error('Validation Error'),
}

export { Default, WithData }

export default StorybookEntry
