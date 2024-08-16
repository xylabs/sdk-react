import type { Meta, StoryFn } from '@storybook/react'
import { EthAddress } from '@xylabs/eth-address'
import { FlexRow } from '@xylabs/react-flexbox'
import React from 'react'

import { EthAccountButton } from './EthAccountButton.tsx'

const StorybookEntry = {
  argTypes: {},
  component: EthAccountButton,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'crypto/EthAccount/Button',
} as Meta<typeof EthAccountButton>

const Template: StoryFn<typeof EthAccountButton> = args => (
  <FlexRow>
    <EthAccountButton variant="outlined" {...args}></EthAccountButton>
  </FlexRow>
)

const Long = Template.bind({})
Long.args = {
  address: EthAddress.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
  addressLength: 'long',
  icon: true,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const LongLarge = Template.bind({})
LongLarge.args = {
  address: EthAddress.fromString('0x6792b02f88b32c4fe8e31cfa41ae5af44865f930'),
  addressLength: 'long',
  icon: true,
  size: 'large',
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
  icon: true,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

const AutoEmpty = Template.bind({})
AutoEmpty.args = {
  addressLength: 'auto',
  icon: true,
  title: 'Sample EthAccount',
  toEtherScan: true,
}

export { Auto, AutoEmpty, Long, LongEmpty, LongLarge, Medium, MediumEmpty, Short, ShortEmpty }

export default StorybookEntry
