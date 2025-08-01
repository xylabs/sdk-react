import { Paper } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import { EthAddressWrapper } from '@xylabs/eth-address'
import type { FlexBoxProps } from '@xylabs/react-flexbox'
import React from 'react'

import { EthAccountBox } from './EthAccountBox.tsx'
import type { EthAccountProps } from './EthAccountProps.tsx'

const StorybookEntry = {
  argTypes: {},
  component: EthAccountBox,
  parameters: { docs: { page: null } },
  title: 'crypto/EthAccount/Box',
} as Meta<typeof EthAccountBox>

const Template: StoryFn<typeof EthAccountBox> = (args: EthAccountProps & FlexBoxProps) => (
  <Paper variant="outlined" style={{ overflow: 'hidden' }}>
    <EthAccountBox {...args}></EthAccountBox>
  </Paper>
)

const Long = Template.bind({})
Long.args = {
  address: EthAddressWrapper.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
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
  address: EthAddressWrapper.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
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
  address: EthAddressWrapper.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
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
  address: EthAddressWrapper.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
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
  address: EthAddressWrapper.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
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
  address: EthAddressWrapper.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
  icon: true,
  iconOnly: true,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

export {
  Auto, AutoEmpty, AutoEmptyIcon, AutoIcon, IconOnly, Long, LongEmpty, Medium, MediumEmpty, Short, ShortEmpty,
}

export default StorybookEntry
