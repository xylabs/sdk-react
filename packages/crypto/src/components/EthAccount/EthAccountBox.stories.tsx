import { Paper } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { EthAddress } from '@xylabs/sdk-js'

import { EthAccountBox } from './EthAccountBox'

const StorybookEntry = {
  argTypes: {},
  component: EthAccountBox,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'crypto/EthAccount/Box',
} as ComponentMeta<typeof EthAccountBox>

const Template: ComponentStory<typeof EthAccountBox> = (args) => (
  <Paper variant="outlined" style={{ overflow: 'hidden' }}>
    <EthAccountBox {...args}></EthAccountBox>
  </Paper>
)

const Long = Template.bind({})
Long.args = {
  address: EthAddress.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
  addressLength: 'long',
  icon: true,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const LongEmpty = Template.bind({})
LongEmpty.args = {
  addressLength: 'long',
  icon: true,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const Medium = Template.bind({})
Medium.args = {
  address: EthAddress.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
  addressLength: 'short',
  icon: true,
  shortenedLength: 8,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const MediumEmpty = Template.bind({})
MediumEmpty.args = {
  addressLength: 'short',
  icon: true,
  shortenedLength: 8,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const Short = Template.bind({})
Short.args = {
  address: EthAddress.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
  addressLength: 'short',
  icon: true,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const ShortEmpty = Template.bind({})
ShortEmpty.args = {
  addressLength: 'short',
  icon: true,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const Auto = Template.bind({})
Auto.args = {
  address: EthAddress.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
  addressLength: 'auto',
  icon: false,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const AutoEmpty = Template.bind({})
AutoEmpty.args = {
  addressLength: 'auto',
  icon: false,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const AutoIcon = Template.bind({})
AutoIcon.args = {
  address: EthAddress.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
  addressLength: 'auto',
  icon: true,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const AutoEmptyIcon = Template.bind({})
AutoEmptyIcon.args = {
  addressLength: 'auto',
  icon: true,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const IconOnly = Template.bind({})
IconOnly.args = {
  address: EthAddress.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
  icon: true,
  iconOnly: true,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

export { Auto, AutoEmpty, AutoEmptyIcon, AutoIcon, IconOnly, Long, LongEmpty, Medium, MediumEmpty, Short, ShortEmpty }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
