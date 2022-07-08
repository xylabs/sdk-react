import MenuIcon from '@mui/icons-material/Menu'
import { Toolbar } from '@mui/material'
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
  title: 'common/AppBarEx',
} as ComponentMeta<typeof AppBarEx>

const Template: ComponentStory<typeof AppBarEx> = (args) => <AppBarEx {...args}></AppBarEx>

const Empty = Template.bind({})
Empty.args = {
  title: 'Empty',
}

const WithMenu = Template.bind({})
WithMenu.args = {
  menu: (
    <Toolbar>
      <MenuIcon />
    </Toolbar>
  ),
  title: 'Empty',
}

export { Empty, WithMenu }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
