import { Menu as MenuIcon } from '@mui/icons-material'
import { Toolbar } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'
import { AppBarEx, AppBarExProps } from '@xylabs/react-appbar'

const StorybookEntry = {
  argTypes: {},
  component: AppBarEx,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'common/AppBarEx',
} as Meta<typeof AppBarEx>

const Template: StoryFn<typeof AppBarEx> = (args: AppBarExProps) => <AppBarEx {...args}></AppBarEx>

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
