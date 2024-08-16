import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ErrorsViewer } from './ErrorsViewer.tsx'
import type { ErrorsViewerProps } from './ErrorsViewerProps.ts'

const StorybookEntry = {
  argTypes: {},
  component: ErrorsViewer,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/ErrorsViewer',
} as Meta<typeof ErrorsViewer>

const Template: StoryFn<typeof ErrorsViewer> = (args: ErrorsViewerProps) => <ErrorsViewer {...args}></ErrorsViewer>

const Default = Template.bind({})
Default.args = {
  errors: [new Error('Error One'), new Error('Error Two')],
  title: 'Default',
}

export { Default }

export default StorybookEntry
