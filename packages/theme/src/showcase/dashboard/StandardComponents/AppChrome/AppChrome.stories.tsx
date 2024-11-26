import {
  DashboardRounded,
  HubRounded,
  PieChartRounded,
  SettingsRounded,
} from '@mui/icons-material'
import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { SampleDashboard1Data, SampleDashboard2Data } from '../../ExampleDashboards/Data/index.ts'
import { SampleDashboard1, SampleDashboard2 } from '../../ExampleDashboards/index.ts'
import type { AppChromeProps } from './AppChrome.tsx'
import { AppChrome } from './AppChrome.tsx'

export default {
  component: AppChrome,
  title: 'components/AppChrome',
} as Meta<AppChromeProps>

const Template: StoryFn<typeof AppChrome> = args => (
  <Router>
    <AppChrome {...args} />
  </Router>
)

export const FullDashboard = Template.bind({})
FullDashboard.args = {
  items: [
    {
      menuItem: {
        label: 'Dashboard', icon: <DashboardRounded />, path: '/dashboard',
      },
      pageContent: <SampleDashboard1 {...SampleDashboard1Data.AllCategoriesData} />,
    },
    {
      menuItem: {
        label: 'Reports', icon: <PieChartRounded />, path: '/reports',
      },
      pageContent: <SampleDashboard2 {...SampleDashboard2Data.AllCategoriesData} />,
    },
    {
      menuItem: {
        label: 'Integrations', icon: <HubRounded />, path: '/integrations',
      },
      pageContent: <div>Send Email Content</div>,
    },
    {
      menuItem: {
        label: 'Settings', icon: <SettingsRounded />, path: '/settings',
      },
      pageContent: <div>Drafts Content</div>,
    },
  ],
}
