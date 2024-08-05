import { Button } from '@mui/material'
import { StoryFn } from '@storybook/react'
import React, { useState } from 'react'

import { useAsyncEffect } from './useAsyncEffect.tsx'

interface UseAsyncEffectTestProps {
  unmountCallback?: () => void
}
const UseAsyncEffectTest: React.FC<UseAsyncEffectTestProps> = ({ unmountCallback }) => {
  const [resolvedValue, setResolvedValue] = useState('')

  useAsyncEffect(
    async () => {
      setResolvedValue(await Promise.resolve(JSON.stringify({ value: true })))
      return unmountCallback
    },
    [unmountCallback],
  )

  return (
    <div>
      Resolved Value:
      {' '}
      <strong>{resolvedValue}</strong>
    </div>
  )
}

export default {
  component: UseAsyncEffectTest,
  title: 'hooks/useAsyncEffect',
}

const Template: StoryFn<typeof UseAsyncEffectTest> = (args: UseAsyncEffectTestProps) => {
  const [unmounted, setUnmounted] = useState(false)
  return (
    <div>
      <Button variant="contained" onClick={() => setUnmounted(!unmounted)}>
        Toggle Unmount
      </Button>
      {unmounted ? null : <UseAsyncEffectTest {...args} />}
    </div>
  )
}

const Default = Template.bind({})

const WithUnmountCallback = Template.bind({})
WithUnmountCallback.args = {
  unmountCallback: () => alert('unmounted useAsyncEffect'),
}

export { Default, WithUnmountCallback }
