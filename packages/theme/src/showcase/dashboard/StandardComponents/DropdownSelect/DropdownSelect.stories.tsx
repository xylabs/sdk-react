import type { Meta, StoryFn } from '@storybook/react-vite'
import { FlexRow } from '@xylabs/react-flexbox'
import React from 'react'

import type { DropdownSelectProps } from './DropdownSelect.tsx'
import { DropdownSelect } from './DropdownSelect.tsx'
import { DropdownSelectCategories } from './DropdownSelectData.tsx'

export default {
  component: DropdownSelect,
  title: 'components/DropdownSelect',
} as Meta<DropdownSelectProps>

const Template: StoryFn<typeof DropdownSelect> = args => (
  <FlexRow gap={2}>
    <DropdownSelect {...args} />
  </FlexRow>
)

export const Default = Template.bind({})
Default.args = {
  items: DropdownSelectCategories, onChange: console.log, selectedValue: 'gamefi',
}
