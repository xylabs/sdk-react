import NotListedLocationIcon from '@mui/icons-material/NotListedLocation'
import { Typography } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FlexRow } from '@xylabs/react-flexbox'

import { QuickTipButton } from './QuickTipButton'

const StorybookEntry = {
  argTypes: {},
  component: QuickTipButton,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/QuickTipButton',
} as ComponentMeta<typeof QuickTipButton>

const Template: ComponentStory<typeof QuickTipButton> = (args) => (
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

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
