import { ComponentMeta, ComponentStory } from '@storybook/react'
import { EthAddress } from '@xylabs/sdk-js'

import { FlexRow } from '../FlexBox'
import { EthAccount } from './EthAccount'

const StorybookEntry = {
  argTypes: {},
  component: EthAccount,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/EthAccount',
} as ComponentMeta<typeof EthAccount>

const Template: ComponentStory<typeof EthAccount> = (args) => (
  <FlexRow>
    <EthAccount variant="outlined" {...args}></EthAccount>
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

const LongEmpty = Template.bind({})
LongEmpty.args = {
  addressLength: 'long',
  icon: true,
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

export { Auto, AutoEmpty, Long, LongEmpty, Short, ShortEmpty }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
