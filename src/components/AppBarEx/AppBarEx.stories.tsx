import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AppBarEx } from './AppBarEx'

const StorybookEntry = {
  argTypes: {},
  component: AppBarEx,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/AppBarEx',
} as ComponentMeta<typeof AppBarEx>

const Template: ComponentStory<typeof AppBarEx> = (args) => <AppBarEx {...args}></AppBarEx>

const Empty = Template.bind({})
Empty.args = {
  title: 'Empty',
}

export { Empty }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
