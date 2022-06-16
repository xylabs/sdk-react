import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AccordionGroup } from './AccordionGroup'

const StorybookEntry = {
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

const Default = Template.bind({})
Default.args = {
  data: [
    { description: 'lorem ipsum', name: 'Section 1' },
    { description: 'lorem ipsum', name: 'Section 2' },
    { description: 'lorem ipsum', name: 'Section 3' },
  ],
  defaultExpandedIndex: 1,
}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
