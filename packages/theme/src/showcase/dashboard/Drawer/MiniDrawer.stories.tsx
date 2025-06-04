import {
  DashboardRounded, HubRounded, ReportRounded, SettingsRounded,
} from '@mui/icons-material'
import { Box } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react-vite'
import { ButtonEx } from '@xylabs/react-button'
import { FlexRow } from '@xylabs/react-flexbox'
import React, { useState } from 'react'
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom'

import { MiniDrawer } from './MiniDrawer.tsx'

// Define placeholder components for each route
const Inbox = () => <div>Inbox Content</div>
const Starred = () => <div>Starred Content</div>
const SendEmail = () => <div>Send Email Content</div>
const Drafts = () => <div>Drafts Content</div>

export default {
  component: MiniDrawer,
  title: 'components/MiniDrawer',
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the drawer is open or closed',
    },
  },
} as Meta<typeof MiniDrawer>

const sampleMenuItems = [
  {
    label: 'Dashboard', icon: <DashboardRounded />, path: '/dashboard',
  },
  {
    label: 'Reports', icon: <ReportRounded />, path: '/reports',
  },
  {
    label: 'Integrations', icon: <HubRounded />, path: '/integrations',
  },
  {
    label: 'Settings', icon: <SettingsRounded />, path: '/settings',
  },
]

const Template: StoryFn = ({ open, ...args }) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <Router>
      <FlexRow>
        <MiniDrawer
          {...args}
          openHandler={setIsOpen}
          open={isOpen}
          menuItems={args.menuItems}
        />
        <ButtonEx onClick={handleToggle} sx={{ margin: '16px' }}>Toggle Drawer</ButtonEx>
        <Box sx={{
          marginLeft: isOpen ? '240px' : '56px', padding: '16px', flexGrow: 1,
        }}
        >
          <Routes>
            <Route path="/" element={<div>Select an item from the drawer</div>} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/drafts" element={<Drafts />} />
          </Routes>
        </Box>
      </FlexRow>
    </Router>
  )
}

export const Default = Template.bind({})
Default.args = { open: true, menuItems: sampleMenuItems }
