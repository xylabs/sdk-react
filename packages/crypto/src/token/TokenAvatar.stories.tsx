import type { Meta, StoryFn } from '@storybook/react-vite'
import { FlexRow } from '@xylabs/react-flexbox'
import React from 'react'

import { XL1ColorLogoIconSvg } from './img/index.ts'
import { TokenAvatar } from './TokenAvatar.tsx'

const StorybookEntry = {
  argTypes: {},
  component: TokenAvatar,
  title: 'crypto/token/Avatar',
} as Meta<typeof TokenAvatar>

const Template: StoryFn<typeof TokenAvatar> = args => <TokenAvatar {...args} />

const Default = Template.bind({})
Default.args = {}

const WithImage = Template.bind({})
WithImage.args = {
  imgAlt: 'XL1 Token Logo',
  imgSrc: XL1ColorLogoIconSvg,
}

const WithImageAndScale = Template.bind({})
WithImageAndScale.args = {
  imgAlt: 'XL1 Token Logo',
  imgSrc: XL1ColorLogoIconSvg,
  scale: 2.5,
}

const WithImageAndVariant = Template.bind({})
WithImageAndVariant.args = {
  imgAlt: 'XL1 Token Logo',
  imgSrc: XL1ColorLogoIconSvg,
  typographyVariant: 'h4',
}

const MultipleTemplate: StoryFn<typeof TokenAvatar> = () => (
  <FlexRow gap={2}>
    <TokenAvatar imgSrc={XL1ColorLogoIconSvg} imgAlt="XL1 Token Logo" typographyVariant="body2" />
    <TokenAvatar imgSrc={XL1ColorLogoIconSvg} imgAlt="XL1 Token Logo" typographyVariant="body1" />
    <TokenAvatar imgSrc={XL1ColorLogoIconSvg} imgAlt="XL1 Token Logo" typographyVariant="h6" />
    <TokenAvatar imgSrc={XL1ColorLogoIconSvg} imgAlt="XL1 Token Logo" typographyVariant="h4" />
    <TokenAvatar imgSrc={XL1ColorLogoIconSvg} imgAlt="XL1 Token Logo" typographyVariant="h3" />
  </FlexRow>
)

const MultipleSizes = MultipleTemplate.bind({})

export {
  Default, MultipleSizes, WithImage, WithImageAndScale, WithImageAndVariant,
}

export default StorybookEntry
