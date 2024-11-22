import { Box, useTheme } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import type { PaletteColorCardProps } from './PaletteColorCard.tsx'
import { PaletteColorCard } from './PaletteColorCard.tsx'

const StorybookEntry = {
  argTypes: {},
  component: PaletteColorCard,
  parameters: { docs: { page: null }, layout: 'fullscreen' },
  title: 'Theme/PaletteColorCard',
} as Meta<typeof PaletteColorCard>

const Template: StoryFn<typeof PaletteColorCard> = (args: PaletteColorCardProps) => {
  const theme = useTheme()
  return (
    <Box display="flex" height="100vh" width="100vw">
      <PaletteColorCard {...args} color={theme.palette.primary} />
    </Box>
  )
}

const Default = Template.bind({})
Default.args = { colorName: 'Primary', subtype: 'main' }

export { Default }

export default StorybookEntry
