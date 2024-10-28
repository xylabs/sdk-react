import { List } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { MenuListItemContainer } from '../SiteMenu/index.ts'
import { SystemToolbar } from '../Toolbar/index.ts'
import { ApplicationAppBar } from './Application.tsx'

const StorybookEntry = {
  argTypes: {},
  component: ApplicationAppBar,
  parameters: { docs: { page: null } },
  title: 'appbar/ApplicationAppBar',
} as Meta<typeof ApplicationAppBar>

const Template: StoryFn<typeof ApplicationAppBar> = (args) => {
  return (
    <BrowserRouter>
      <ApplicationAppBar
        systemToolbar={(
          <SystemToolbar
            menuItems={(
              <List>
                <MenuListItemContainer primary="Hello" />
              </List>
            )}
          />
        )}
        {...args}
      >
      </ApplicationAppBar>
    </BrowserRouter>
  )
}

const Default = Template.bind({})
Default.args = {}

export { Default }

export default StorybookEntry
