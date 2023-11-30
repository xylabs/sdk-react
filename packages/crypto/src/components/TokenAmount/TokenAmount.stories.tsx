import { Meta, StoryFn } from '@storybook/react'

import { TokenAmount } from './TokenAmount'

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

const Template: StoryFn<typeof TokenAmount> = (args) => <TokenAmount {...args}></TokenAmount>

const Default = Template.bind({})
Default.args = {
  amount: '0x1195c751dbcc90ab4200000',
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
  amount: '0x1195c751dbcc90ab4200000',
  logo: true,
}

const WithLogoAndColor = Template.bind({})
WithLogoAndColor.args = {
  amount: '0x1195c751dbcc90ab4200000',
  logo: true,
  statusColor: '#ff0',
}

const WithLogoAndColorLarge = Template.bind({})
WithLogoAndColorLarge.args = {
  amount: '0x1195c751dbcc90ab4200000',
  logo: true,
  size: 'large',
  statusColor: '#ff0',
}

const WithLabel = Template.bind({})
WithLabel.args = {
  amount: '0x1195c751dbcc90ab4200000',
  label: 'Balance',
}

const WithLogoAndLabel = Template.bind({})
WithLogoAndLabel.args = {
  amount: '0x1195c751dbcc90ab4200000',
  label: 'Balance',
  logo: true,
}

export { Default, WithLabel, WithLogo, WithLogoAndColor, WithLogoAndColorLarge, WithLogoAndLabel, WithNull, WithUndefined }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
