import type { Meta, StoryFn } from '@storybook/react-vite'
import { UserEventsProvider, XyoUserEventHandler } from '@xylabs/react-pixel'
import type { ReactNode } from 'react'
import React from 'react'

import { selectVariantForExperiment, useExperiments } from './useExperiment.ts'

const View: React.FC = () => {
  useExperiments<ReactNode>('Storybook Test 2', [
    { name: 'a/legacy', weight: 33 },
    { name: 'b/testing', weight: 33 },
    { name: 'c/testing', weight: 33 },
  ])
  const { experimentName, selectVariant } = useExperiments<ReactNode>('Storybook Test 3', [
    { name: 'a/legacy', weight: 33 },
    { name: 'b/testing', weight: 33 },
    { name: 'c/testing', weight: 33 },
  ])
  const texts = {
    'a/legacy': <p>a</p>, 'b/testing': <p>b</p>, 'c/testing': <p>c</p>,
  }
  const test0 = selectVariantForExperiment<ReactNode>('Storybook Test Does not exists', texts, <p>DefaultNode</p>)
  const test1 = selectVariant({
    'a/legacy': <p>a</p>, 'b/testing': <p>b</p>, 'c/testing': <p>c</p>,
  }, <p>default node</p>)
  const test2 = selectVariantForExperiment<ReactNode>(experimentName, texts, <p>DefaultNode</p>)
  return (
    <div>
      <div>{test0}</div>
      <div>{test1}</div>
      <div>{test2}</div>
    </div>
  )
}

const WrappedView: React.FC = ({ ...props }) => (
  <UserEventsProvider userEvents={XyoUserEventHandler.get()}>
    <View {...props} />
  </UserEventsProvider>
)

const StorybookEntry = {
  argTypes: {},
  component: WrappedView,
  parameters: { docs: { page: null } },
  title: 'Hooks/useExperiments',
} as Meta<typeof View>

const Template: StoryFn<typeof View> = args => <WrappedView {...args} />

const Default = Template.bind({})
Default.args = {}

export { Default }

export default StorybookEntry
