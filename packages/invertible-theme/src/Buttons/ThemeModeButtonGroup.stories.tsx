import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ThemeModeButtonGroup } from './ThemeModeButtonGroup.tsx'

const StorybookEntry = {
  argTypes: {},
  component: ThemeModeButtonGroup,
  parameters: { docs: { page: null } },
  title: 'theme/ThemeModeButtonGroup',
} as Meta<typeof ThemeModeButtonGroup>

const Template: StoryFn<typeof ThemeModeButtonGroup> = () => {
  return (
    <ThemeModeButtonGroup />
  )
}

const Default = Template.bind({})
Default.args = {}

export { Default }

export default StorybookEntry
