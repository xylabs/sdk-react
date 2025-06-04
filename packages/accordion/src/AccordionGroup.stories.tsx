import { Grid } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import { FlexCol } from '@xylabs/react-flexbox'
import React from 'react'

import { AccordionGroup } from './AccordionGroup.tsx'

const StorybookEntry: Meta<typeof AccordionGroup> = {
  argTypes: {},
  component: AccordionGroup,
  parameters: { docs: { page: null } },
  title: 'Components/AccordionGroup',
} as Meta<typeof AccordionGroup>

const Template: StoryFn<typeof AccordionGroup> = args => <AccordionGroup {...args}></AccordionGroup>

const Default: StoryFn<typeof AccordionGroup> = Template.bind({})
Default.args = {
  data: [
    { description: 'lorem ipsum', name: 'Section 1' },
    { description: 'lorem ipsum', name: 'Section 2' },
    {
      children: [
        <FlexCol key="container" alignItems="stretch">
          <Grid container>
            <Grid size={{ xs: 6 }}>
              Column 1
            </Grid>
            <Grid size={{ xs: 6 }}>
              Column 2
            </Grid>
          </Grid>
        </FlexCol>,
      ],
      name: 'Section 3',
    },
  ],
  defaultExpandedName: 'Section 1',
}

export { Default }

export default StorybookEntry
