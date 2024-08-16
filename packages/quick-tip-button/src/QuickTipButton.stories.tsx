import { NotListedLocation as NotListedLocationIcon } from '@mui/icons-material'
import { Typography } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import { FlexRow } from '@xylabs/react-flexbox'
import React from 'react'

import { QuickTipButton } from './QuickTipButton.tsx'

const StorybookEntry = {
  argTypes: {},
  component: QuickTipButton,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/QuickTipButton',
} as Meta<typeof QuickTipButton>

const Template: StoryFn<typeof QuickTipButton> = args => (
  <FlexRow>
    <QuickTipButton {...args}></QuickTipButton>
  </FlexRow>
)

const Default = Template.bind({})
Default.args = {
  children: <Typography>This is a test quick tip. This message is supposed to explain something.</Typography>,
  title: 'Sample Quick Tip',
}

const Hover = Template.bind({})
Hover.args = {
  disableDialog: true,
  title: 'Sample Quick Tip on Hover',
}

const HoverAndMessage = Template.bind({})
HoverAndMessage.args = {
  children: <Typography>This is a test quick tip. This message is supposed to explain something.</Typography>,
  dialogProps: { fullWidth: true, maxWidth: 'md' },
  hoverText: 'Hover is different than the title',
  title: 'Sample Quick Tip on Hover',
}

const CustomIcon = Template.bind({})
CustomIcon.args = {
  Icon: NotListedLocationIcon,
  hoverText: 'Hover is different than the title',
  title: 'Sample Quick Tip on Hover',
}

export { CustomIcon, Default, Hover, HoverAndMessage }

export default StorybookEntry
