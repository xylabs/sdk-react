import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PixelApi, XyPixel } from '@xylabs/pixel'
import { useEffect, useState } from 'react'

import { PixelDebugger, PixelDebuggerToggle } from './index'
import { PixelDebuggerProvider } from './PixelDebuggerProvider'

const StorybookEntry = {
  argTypes: {},
  component: PixelDebuggerToggle,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'pixel-debugger/PixelDebuggerToggle',
} as ComponentMeta<typeof PixelDebuggerToggle>

const Template: ComponentStory<typeof PixelDebuggerToggle> = (args) => {
  const [pixel, setPixel] = useState<XyPixel>()
  useEffect(() => {
    XyPixel.selectApi(new PixelApi('local'))
    setPixel(XyPixel.init('storybookPixel'))
  }, [])
  return pixel ? (
    <PixelDebuggerProvider>
      <PixelDebuggerToggle {...args} />
      <PixelDebugger />
    </PixelDebuggerProvider>
  ) : (
    <></>
  )
}

const Default = Template.bind({})
Default.args = {}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
