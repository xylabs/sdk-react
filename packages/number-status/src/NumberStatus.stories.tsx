import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { NumberStatus } from './NumberStatus.tsx'
import type { NumberStatusProps } from './NumberStatusProps.ts'

const StorybookEntry = {
  argTypes: {},
  component: NumberStatus,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/NumberStatus',
} as Meta<typeof NumberStatus>

const NumberStatusTemplate: StoryFn<typeof NumberStatus> = (args: NumberStatusProps) => <NumberStatus {...args}></NumberStatus>

const Default = NumberStatusTemplate.bind({})
Default.args = {
  title: 'Default',
  value: 100,
}

const Default6Digits = NumberStatusTemplate.bind({})
Default6Digits.args = {
  title: 'Default-6',
  value: 334_455,
}

const Default10Digits = NumberStatusTemplate.bind({})
Default10Digits.args = {
  title: 'Default-10',
  value: 334_455_667_788,
}

const Small = NumberStatusTemplate.bind({})
Small.args = {
  size: 'small',
  title: 'Small',
  value: 100,
}

const Small6Digits = NumberStatusTemplate.bind({})
Small6Digits.args = {
  size: 'small',
  title: 'Small-6',
  value: 334_455,
}

const Small10Digits = NumberStatusTemplate.bind({})
Small10Digits.args = {
  size: 'small',
  title: 'Small-10',
  value: 334_455_667_788,
}

const Large = NumberStatusTemplate.bind({})
Large.args = {
  size: 'large',
  title: 'Large',
  value: 100,
}

const Large6Digits = NumberStatusTemplate.bind({})
Large6Digits.args = {
  size: 'large',
  title: 'Large-6',
  value: 334_455,
}

const Large10Digits = NumberStatusTemplate.bind({})
Large10Digits.args = {
  size: 'large',
  title: 'Large-10',
  value: 334_455_667_788,
}

export { Default, Default6Digits, Default10Digits, Large, Large6Digits, Large10Digits, Small, Small6Digits, Small10Digits }

export default StorybookEntry
