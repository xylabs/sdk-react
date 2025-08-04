import type { Meta, StoryFn } from '@storybook/react-vite'
import { isString } from '@xylabs/typeof'
import React from 'react'

import { TokenAmount } from './TokenAmount.tsx'
import type { TokenAmountProps } from './TokenAmountProps.tsx'

const TokenAmountWrapper: React.FC<Omit<TokenAmountProps, 'amount' | 'href'> & { amount?: string | null }> = ({
  amount,
  ...props
}) => {
  return (
    <TokenAmount
      {...props}
      amount={isString(amount) ? BigInt(amount) : undefined}
    />
  )
}

const StorybookEntry = {
  argTypes: {},
  component: TokenAmountWrapper,
  parameters: { docs: { page: null } },
  title: 'crypto/TokenAmount',
} as Meta<typeof TokenAmountWrapper>

const Template: StoryFn<typeof TokenAmountWrapper> = args => <TokenAmountWrapper {...args}></TokenAmountWrapper>

const Default = Template.bind({})
Default.args = { amount: '0x1195c751dbcc90ab4200000' }

const WithNull = Template.bind({})
WithNull.args = { amount: null }

const WithUndefined = Template.bind({})
WithUndefined.args = { amount: undefined }

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

export {
  Default, WithLabel, WithLogo, WithLogoAndColor, WithLogoAndColorLarge, WithLogoAndLabel, WithNull, WithUndefined,
}

export default StorybookEntry
