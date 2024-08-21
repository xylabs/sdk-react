import type { Meta, StoryFn } from '@storybook/react'
import { FlexCol, FlexRow } from '@xylabs/react-flexbox'
import React from 'react'

import { ButtonEx } from './ButtonEx.tsx'

const StorybookEntry = {
  argTypes: {},
  component: ButtonEx,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'button/ButtonEx',
} as Meta<typeof ButtonEx>

const DefaultTemplate: StoryFn<typeof ButtonEx> = args => (
  <FlexRow justifyContent="flex-start">
    <FlexCol marginX={1}>
      <ButtonEx {...args}>Default</ButtonEx>
    </FlexCol>
    <FlexCol marginX={1}>
      <ButtonEx variant="outlined" {...args}>
        Outlined
      </ButtonEx>
    </FlexCol>
    <FlexCol marginX={1}>
      <ButtonEx variant="contained" {...args}>
        Contained
      </ButtonEx>
    </FlexCol>
  </FlexRow>
)

const Default = DefaultTemplate.bind({})
Default.args = {}

const BusyCircular = DefaultTemplate.bind({})
BusyCircular.args = {
  busy: true, busyVariant: 'circular',
}

const BusyLinear = DefaultTemplate.bind({})
BusyLinear.args = {
  busy: true, busyVariant: 'linear',
}

export {
  BusyCircular, BusyLinear, Default,
}

export default StorybookEntry
