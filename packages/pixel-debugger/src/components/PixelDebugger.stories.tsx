import { Meta, StoryFn } from '@storybook/react'
import { PixelApi, XyPixel } from '@xylabs/pixel'
import { BusyBoxProps } from '@xylabs/react-flexbox'
import { PixelDebugger, PixelDebuggerProvider, PixelDebuggerToggle } from '@xylabs/react-pixel-debugger'
import { useEffect, useState } from 'react'

const StorybookEntry = {
  argTypes: {},
  component: PixelDebuggerToggle,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'pixel-debugger/PixelDebuggerToggle',
} as Meta<typeof PixelDebuggerToggle>

const Template: StoryFn<typeof PixelDebuggerToggle> = (args: BusyBoxProps) => {
  const [pixel, setPixel] = useState<XyPixel>()
  useEffect(() => {
    XyPixel.selectApi(new PixelApi('local'))
    setPixel(XyPixel.init('storybookPixel'))
  }, [])
  return pixel ?
      <PixelDebuggerProvider>
        <PixelDebuggerToggle {...args} />
        <PixelDebugger />
      </PixelDebuggerProvider>
    : <></>
}

const Default = Template.bind({})
Default.args = {}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
