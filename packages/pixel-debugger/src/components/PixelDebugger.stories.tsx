import type { Meta, StoryFn } from '@storybook/react'
import { PixelApi, XyPixel } from '@xylabs/pixel'
import type { BusyBoxProps } from '@xylabs/react-flexbox'
import React, { useMemo, useState } from 'react'

import { PixelDebugger } from './PixelDebugger.tsx'
import { PixelDebuggerProvider } from './PixelDebuggerProvider.tsx'
import { PixelDebuggerToggle } from './PixelDebuggerToggle.tsx'

const StorybookEntry = {
  argTypes: {},
  component: PixelDebuggerToggle,
  parameters: { docs: { page: null } },
  title: 'pixel-debugger/PixelDebuggerToggle',
} as Meta<typeof PixelDebuggerToggle>

const Template: StoryFn<typeof PixelDebuggerToggle> = (args: BusyBoxProps) => {
  const [pixel, setPixel] = useState<XyPixel>()
  useMemo(() => {
    XyPixel.selectApi(new PixelApi('local'))
    setPixel(XyPixel.init('storybookPixel'))
  }, [])
  return pixel
    ? (
        <PixelDebuggerProvider>
          <PixelDebuggerToggle {...args} />
          <PixelDebugger />
        </PixelDebuggerProvider>
      )
    : <></>
}

const Default = Template.bind({})
Default.args = {}

export { Default }

export default StorybookEntry
