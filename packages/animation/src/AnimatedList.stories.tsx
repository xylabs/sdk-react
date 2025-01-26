import type { CardProps } from '@mui/material'
import { Button, Card } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import { FlexCol } from '@xylabs/react-flexbox'
import React, { useMemo, useState } from 'react'

import type { NodesWithKeys } from './AnimatedList.tsx'
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

const initialItems = [
  { child: <TestCard title="key" key={3}>3</TestCard>, key: 3 },
  { child: <TestCard title="key" key={2}>2</TestCard>, key: 2 },
  { child: <TestCard title="1">1</TestCard>, key: 1 },
]

export default {
  title: 'animations/AnimatedList',
  component: AnimatedList,
} as Meta

const Template: StoryFn<typeof AnimatedList> = ({ items, ...args }) => {
  const [index, setIndex] = useState(3)
  const [additionalItems, setAdditionalItems] = useState<NodesWithKeys[]>([])

  const combinedItems = useMemo(() => [...additionalItems, ...items ?? []], [additionalItems])

  // Function to add a new item
  const addChild = () => {
    const newIndex = index + 1
    setIndex(newIndex)
    setAdditionalItems([{ child: <TestCard title="key" key={newIndex}>{newIndex}</TestCard>, key: newIndex }, ...additionalItems ?? []])
  }

  // Function to remove the last item
  const removeChild = () => {
    setAdditionalItems(additionalItems?.slice(0, -1))
  }
  return (
    <FlexCol alignItems="stretch" gap={2}>
      <Button onClick={addChild}>Add Item</Button>
      <Button onClick={removeChild}>Remove Item</Button>
      <FlexCol gap={2}>
        <AnimatedList items={combinedItems} {...args} />
      </FlexCol>
    </FlexCol>
  )
}

const Default = Template.bind({})
Default.args = {}

const WithChildren = Template.bind({})
WithChildren.args = { items: initialItems }

export { Default, WithChildren }
