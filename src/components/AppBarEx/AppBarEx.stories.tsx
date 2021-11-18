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
  title: 'AppBarEx',
} as ComponentMeta<typeof AppBarEx>

const Template: ComponentStory<typeof AppBarEx> = (args) => <AppBarEx {...args}></AppBarEx>

const Default = Template.bind({})
Default.args = {
  title: 'Default',
}

export { Default, StorybookEntry }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
