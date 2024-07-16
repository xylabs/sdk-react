import { Grid } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { AccordionGroup } from '@xylabs/react-accordion'
import { FlexCol } from '@xylabs/react-flexbox'

const StorybookEntry: Meta<typeof AccordionGroup> = {
  argTypes: {},
  component: AccordionGroup,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/AccordionGroup',
} as Meta<typeof AccordionGroup>

const Template: StoryFn<typeof AccordionGroup> = (args) => <AccordionGroup {...args}></AccordionGroup>

const Default: StoryFn<typeof AccordionGroup> = Template.bind({})
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
