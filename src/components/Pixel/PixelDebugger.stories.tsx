import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PixelDebuggerToggle } from './index'
import { useEffect } from 'react'
import { PixelApi, XyPixel } from '@xylabs/pixel'

const StorybookEntry = {
  argTypes: {},
  component: PixelDebuggerToggle,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/PixelDebuggerToggle',
} as ComponentMeta<typeof PixelDebuggerToggle>

const Template: ComponentStory<typeof PixelDebuggerToggle> = (args) => {
  useEffect(() => {
    XyPixel.selectApi(new PixelApi('local'))
    XyPixel.init('storybookPixel')
  }, [])
  return (
    <div>
      <PixelDebuggerToggle {...args} />
      <div id="pixelPortal" />
    </div>
  )
}

const Default = Template.bind({})
Default.args = {}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
