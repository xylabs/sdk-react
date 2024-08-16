import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { TokenAmount } from './TokenAmount.tsx'

const StorybookEntry = {
  argTypes: {},
  component: TokenAmount,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'crypto/TokenAmount',
} as Meta<typeof TokenAmount>

const Template: StoryFn<typeof TokenAmount> = args => <TokenAmount {...args}></TokenAmount>

const Default = Template.bind({})
Default.args = {
  amount: BigInt('0x1195c751dbcc90ab4200000'),
}

const WithNull = Template.bind({})
WithNull.args = {
  amount: null,
}

const WithUndefined = Template.bind({})
WithUndefined.args = {
  amount: undefined,
}

const WithLogo = Template.bind({})
WithLogo.args = {
  amount: BigInt('0x1195c751dbcc90ab4200000'),
  logo: true,
}

const WithLogoAndColor = Template.bind({})
WithLogoAndColor.args = {
  amount: BigInt('0x1195c751dbcc90ab4200000'),
  logo: true,
  statusColor: '#ff0',
}

const WithLogoAndColorLarge = Template.bind({})
WithLogoAndColorLarge.args = {
  amount: BigInt('0x1195c751dbcc90ab4200000'),
  logo: true,
  size: 'large',
  statusColor: '#ff0',
}

const WithLabel = Template.bind({})
WithLabel.args = {
  amount: BigInt('0x1195c751dbcc90ab4200000'),
  label: 'Balance',
}

const WithLogoAndLabel = Template.bind({})
WithLogoAndLabel.args = {
  amount: BigInt('0x1195c751dbcc90ab4200000'),
  label: 'Balance',
  logo: true,
}

export { Default, WithLabel, WithLogo, WithLogoAndColor, WithLogoAndColorLarge, WithLogoAndLabel, WithNull, WithUndefined }

export default StorybookEntry
