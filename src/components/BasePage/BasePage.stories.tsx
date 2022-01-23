import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BasePage } from './BasePage'

const StorybookEntry = {
  argTypes: {},
  component: BasePage,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/BasePage',
} as ComponentMeta<typeof BasePage>

const Template: ComponentStory<typeof BasePage> = (args) => <BasePage {...args}></BasePage>

const AppBar = () => <div>AppBar</div>
const FilterBar = () => <div>FilterBar</div>

const Default = Template.bind({})
Default.args = {
  appBar: <AppBar />,
  filterBar: <FilterBar />,
  title: 'Default',
}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
