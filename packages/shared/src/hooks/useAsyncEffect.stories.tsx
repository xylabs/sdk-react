import { Button } from '@mui/material'
import { ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { useAsyncEffect } from './useAsyncEffect'

const UseAsyncEffectTest: React.FC = () => {
  const [resolvedValue, setResolvedValue] = useState('')

  useAsyncEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    async () => {
      setResolvedValue(await Promise.resolve(JSON.stringify({ value: true })))
      return () => {
        alert('unmounted useAsyncEffect')
      }
    },
    [],
  )

  return (
    <div>
      Resolved Value: <strong>{resolvedValue}</strong>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default {
  component: UseAsyncEffectTest,
  title: 'useAsyncEffect',
}

const Template: ComponentStory<typeof UseAsyncEffectTest> = (args) => {
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

export { Default }
