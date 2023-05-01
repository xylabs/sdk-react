import { Meta, StoryFn } from '@storybook/react'
import { BigNumber } from '@xylabs/bignumber'

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
  amount: new BigNumber('1195c751dbcc90ab4200000', 16),
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
  amount: new BigNumber('1195c751dbcc90ab4200000', 16),
  logo: true,
}

const WithLogoAndColor = Template.bind({})
WithLogoAndColor.args = {
  amount: new BigNumber('1195c751dbcc90ab4200000', 16),
  logo: true,
  statusColor: '#ff0',
}

const WithLogoAndColorLarge = Template.bind({})
WithLogoAndColorLarge.args = {
  amount: new BigNumber('1195c751dbcc90ab4200000', 16),
  logo: true,
  size: 'large',
  statusColor: '#ff0',
}

const WithLabel = Template.bind({})
WithLabel.args = {
  amount: new BigNumber('1195c751dbcc90ab4200000', 16),
  label: 'Balance',
}

const WithLogoAndLabel = Template.bind({})
WithLogoAndLabel.args = {
  amount: new BigNumber('1195c751dbcc90ab4200000', 16),
  label: 'Balance',
  logo: true,
}

export { Default, WithLabel, WithLogo, WithLogoAndColor, WithLogoAndColorLarge, WithLogoAndLabel, WithNull, WithUndefined }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
