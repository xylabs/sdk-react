import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ErrorViewer } from './ErrorViewer'

const StorybookEntry = {
  argTypes: {},
  component: ErrorViewer,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'ErrorViewer',
} as ComponentMeta<typeof ErrorViewer>

const Template: ComponentStory<typeof ErrorViewer> = (args) => <ErrorViewer {...args}></ErrorViewer>

const Default = Template.bind({})
Default.args = {
  title: 'Default',
}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
