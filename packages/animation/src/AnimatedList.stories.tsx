import type { CardProps } from '@mui/material'
import { Button, Card } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import { FlexCol } from '@xylabs/react-flexbox'
import React, { useMemo, useState } from 'react'

import type { AnimatedListProps } from './AnimatedList.tsx'
import { AnimatedList } from './AnimatedList.tsx'

const colors = ['red', 'green', 'blue', 'yellow', 'purple']

const TestCard = (props: CardProps) => {
  const bgcolor = useMemo(() => colors[Math.floor(Math.random() * colors.length)], [])
  return (
    <Card
      sx={{
        width: '300px', height: '50px', display: 'flex', bgcolor,
      }}
      {...props}
    />
  )
}

export default {
  title: 'animations/AnimatedList',
  component: AnimatedList,
} as Meta

const Template: StoryFn<typeof AnimatedList> = (args) => {
  const [index, setIndex] = useState(0)
  const [items, setItems] = useState<AnimatedListProps['items']>([])

  // Function to add a new item
  const addChild = () => {
    const newIndex = index + 1
    setIndex(newIndex)
    setItems([{ child: <TestCard title="key" key={newIndex}>{newIndex}</TestCard>, key: newIndex }, ...items ?? []])
  }

  // Function to remove the last item
  const removeChild = () => {
    setItems(items?.slice(0, -1))
  }
  return (
    <FlexCol alignItems="stretch" gap={2}>
      <Button onClick={addChild}>Add Item</Button>
      <Button onClick={removeChild}>Remove Item</Button>
      <FlexCol gap={2}>
        <AnimatedList items={items} {...args} />
      </FlexCol>
    </FlexCol>
  )
}

const Default = Template.bind({})
Default.args = {}

const WithChildren = Template.bind({})
WithChildren.args = {}

export { Default, WithChildren }
