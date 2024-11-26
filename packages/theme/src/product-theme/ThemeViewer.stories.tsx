import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { DataismTheme } from './dataism/index.ts'
import { ThemeViewer } from './ThemeViewer.tsx'

const StorybookEntry = {
  argTypes: {},
  component: ThemeViewer,
  parameters: { docs: { page: null } },
  title: 'theme/ThemeViewer',
} as Meta<typeof ThemeViewer>

const Template: StoryFn<typeof ThemeViewer> = args => (
  <ThemeViewer {...args} />
)

const Default = Template.bind({})
Default.args = { data: DataismTheme }

export { Default }

export default StorybookEntry
