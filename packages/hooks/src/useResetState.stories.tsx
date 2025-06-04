import type { Meta, StoryFn } from '@storybook/react-vite'
import type { FC } from 'react'
import React, { useState } from 'react'

import { useResetState } from './useResetState.ts'

const Inner: FC<{ outerValue?: boolean }> = ({ outerValue }) => {
  const [value, setValue] = useResetState(outerValue)
  return (
    <div style={{ border: 'solid 1px blue' }}>
      <div>Inner</div>
      <div>
        Outer Value:
        {outerValue?.toString()}
      </div>
      <div>
        Inner Value:
        {value?.toString()}
      </div>
      <button type="button" onClick={() => setValue(prev => !prev)}>
        Toggle
      </button>
      <button type="button" onClick={() => setValue(true)}>
        True
      </button>
      <button type="button" onClick={() => setValue(false)}>
        False
      </button>
      <button type="button" onClick={() => setValue(undefined)}>
        undefined
      </button>
    </div>
  )
}

const Outer: FC = () => {
  const [outerValue, setOuterValue] = useState<boolean>()
  return (
    <div style={{ border: 'solid 1px yellow' }}>
      <div>Outer</div>
      <Inner outerValue={outerValue} />
      <div>
        <div>
          Outer Value:
          {outerValue?.toString()}
        </div>
      </div>
      <div>
        <button type="button" onClick={() => setOuterValue(prev => !prev)}>
          Toggle
        </button>
        <button type="button" onClick={() => setOuterValue(true)}>
          True
        </button>
        <button type="button" onClick={() => setOuterValue(false)}>
          False
        </button>
        <button type="button" onClick={() => setOuterValue(undefined)}>
          undefined
        </button>
      </div>
    </div>
  )
}

const StorybookEntry = {
  argTypes: {},
  component: Outer,
  parameters: { docs: { page: null } },
  title: 'hooks/useResetState',
} as Meta<typeof Outer>

const Template: StoryFn<typeof Outer> = () => <Outer></Outer>

const Default = Template.bind({})
Default.args = { title: 'Empty' }

export { Default }

export default StorybookEntry
