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

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
