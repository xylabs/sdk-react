import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ErrorViewer } from './ErrorViewer.tsx'

const StorybookEntry = {
  argTypes: {},
  component: ErrorViewer,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/ErrorViewer',
} as Meta<typeof ErrorViewer>

const Template: StoryFn<typeof ErrorViewer> = args => <ErrorViewer {...args}></ErrorViewer>

const Default = Template.bind({})
Default.args = {
  title: 'Default',
}

export { Default }

export default StorybookEntry
