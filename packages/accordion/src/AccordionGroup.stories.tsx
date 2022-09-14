import { Grid } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FlexCol } from '@xylabs/react-flexbox'

import { AccordionGroup } from './AccordionGroup'

const StorybookEntry: ComponentMeta<typeof AccordionGroup> = {
  argTypes: {},
  component: AccordionGroup,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/AccordionGroup',
} as ComponentMeta<typeof AccordionGroup>

const Template: ComponentStory<typeof AccordionGroup> = (args) => <AccordionGroup {...args}></AccordionGroup>

const Default: ComponentStory<typeof AccordionGroup> = Template.bind({})
Default.args = {
  data: [
    { description: 'lorem ipsum', name: 'Section 1' },
    { description: 'lorem ipsum', name: 'Section 2' },
    {
      children: [
        <FlexCol key="container" alignItems="stretch">
          <Grid container>
            <Grid item xs={6}>
              Column 1
            </Grid>
            <Grid item xs={6}>
              Column 2
            </Grid>
          </Grid>
        </FlexCol>,
      ],
      name: 'Section 3',
    },
  ],
  defaultExpandedIndex: 1,
}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
