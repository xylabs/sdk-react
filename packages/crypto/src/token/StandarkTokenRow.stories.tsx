import type { Meta, StoryFn } from '@storybook/react-vite'
import { FlexCol } from '@xylabs/react-flexbox'
import React from 'react'

import { StandardTokenRow } from './StandardTokenRow.tsx'

const StorybookEntry = {
  argTypes: {},
  component: StandardTokenRow,
  title: 'crypto/token/StandardTokenRow',
} as Meta<typeof StandardTokenRow>

const Template: StoryFn<typeof StandardTokenRow> = args => <StandardTokenRow {...args} />

const XYO = Template.bind({})
XYO.args = {
  currency: 'xyo',
  value: '1,000.00',
}

const XL1 = Template.bind({})
XL1.args = {
  currency: 'xl1',
  value: '500.00',
}

const WithCustomSymbol = Template.bind({})
WithCustomSymbol.args = {
  currency: 'xyo',
  customSymbol: 'XYOV2',
  value: '2,500.00',
}

const WithoutHeightWidth = Template.bind({})
WithoutHeightWidth.args = {
  currency: 'xl1',
  value: '750.00',
}

const WithCustomVariant = Template.bind({})
WithCustomVariant.args = {
  currency: 'xyo',
  textVariant: 'h5',
  value: '10,000.00',
}

const WithCustomWeight = Template.bind({})
WithCustomWeight.args = {
  currency: 'xl1',
  textWeight: 700,
  value: '3,000.00',
}

const WithScale = Template.bind({})
WithScale.args = {
  currency: 'xyo',
  tokenAvatarProps: { scale: 2.5 },
  textVariant: 'h4',
  value: '5,000.00',
}

const WithOverrides = Template.bind({})
WithOverrides.args = {
  currency: 'xl1',
  tokenAvatarProps: { scale: 1 },
  valueOverride: <span style={{ marginRight: '4px' }}>42,000.00</span>,
  symbolOverride: <span>CUSTOM</span>,
}

const MultipleTemplate: StoryFn<typeof StandardTokenRow> = () => (
  <FlexCol gap={2}>
    <StandardTokenRow currency="xyo" value="100.00" textVariant="body2" />
    <StandardTokenRow currency="xl1" value="500.00" textVariant="body1" tokenAvatarProps={{ sx: { height: '1.25rem', width: '1.25rem' } }} />
    <StandardTokenRow currency="xyo" value="1,000.00" textVariant="h6" />
    <StandardTokenRow currency="xl1" value="2,500.00" textVariant="h5" textWeight={600} />
    <StandardTokenRow currency="xyo" value="10,000.00" textVariant="h4" tokenAvatarProps={{ scale: 2 }} />
  </FlexCol>
)

const MultipleSizes = MultipleTemplate.bind({})

export {
  MultipleSizes, WithCustomSymbol, WithCustomVariant, WithCustomWeight, WithoutHeightWidth, WithOverrides, WithScale, XL1, XYO,
}

export default StorybookEntry
