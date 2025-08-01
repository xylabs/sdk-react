import type { Meta, StoryFn } from '@storybook/react-vite'
import React from 'react'

import { FlexCol } from './FlexCol.tsx'
import { FlexRow } from './FlexRow.tsx'

const StorybookEntry = {
  argTypes: {},
  component: FlexCol,
  parameters: { docs: { page: null } },
  title: 'flexbox/FlexCol',
} as Meta<typeof FlexCol>

const Template: StoryFn<typeof FlexCol> = args => <FlexCol {...args}></FlexCol>

const testRows = {
  border: 'solid 1px gray',
  children: (
    <>
      <FlexRow margin={1} padding={1} bgcolor="gray">
        Row One
      </FlexRow>
      <FlexRow margin={1} padding={1} bgcolor="gray">
        Row Two
      </FlexRow>
      <FlexRow margin={1} padding={1} bgcolor="gray">
        Row Three
      </FlexRow>
    </>
  ),
}

const StretchAlignedItems = Template.bind({})
StretchAlignedItems.args = {
  alignItems: 'stretch',
  ...testRows,
  title: 'StretchAlignedItems',
}

const FlexStartAlignedItems = Template.bind({})
FlexStartAlignedItems.args = {
  alignItems: 'flex-start',
  ...testRows,
  title: 'FlexStartAlignedItems',
}

const FlexEndAlignedItems = Template.bind({})
FlexEndAlignedItems.args = {
  alignItems: 'flex-end',
  ...testRows,
  title: 'FlexEndAlignedItems',
}

export {
  FlexEndAlignedItems, FlexStartAlignedItems, StretchAlignedItems,
}

export default StorybookEntry
