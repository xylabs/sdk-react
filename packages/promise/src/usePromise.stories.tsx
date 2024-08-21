import { Button } from '@mui/material'
import type { StoryFn } from '@storybook/react'
import { delay } from '@xylabs/delay'
import React, { useState } from 'react'

import { usePromise } from './usePromise.ts'

interface UseAsyncEffectTestProps {
  delayTicks?: number
  refresh?: number
}
const UsePromiseTest: React.FC<UseAsyncEffectTestProps> = ({
  refresh, delayTicks,
}) => {
  const [refreshValue] = usePromise(

    async () => {
      console.log('UsePromiseTest')
      if (delayTicks) {
        await delay(delayTicks)
      }
      return refresh
    },
    [refresh, delayTicks],
  )

  return (
    <div>
      Hook Value:
      {' '}
      <strong>{refreshValue}</strong>
    </div>
  )
}

export default {
  component: UsePromiseTest,
  title: 'hooks/usePromise',
}

const Template: StoryFn<typeof UsePromiseTest> = (args) => {
  const [refresh, setRefresh] = useState(1)
  return (
    <div>
      <Button variant="contained" onClick={() => setRefresh(refresh + 1)}>
        Refresh
      </Button>
      <UsePromiseTest refresh={refresh} {...args} />
    </div>
  )
}

const Default = Template.bind({})
const WithDelay = Template.bind({})
WithDelay.args = { delayTicks: 1000 }

export { Default, WithDelay }
