import { ComponentMeta, ComponentStory } from '@storybook/react'

import { selectVariantForExperiment, useExperiments } from './useExperiment'

const View: React.FC = () => {
  const { experimentName, selectVariant } = useExperiments('Storybook Test', [
    { name: 'a/legacy', weight: 33 },
    { name: 'b/testing', weight: 33 },
    { name: 'c/testing', weight: 33 },
  ])
  const texts = { 'a/legacy': <p>a</p>, 'b/testing': <p>b</p>, 'c/testing': <p>c</p> }
  const test0 = selectVariantForExperiment('Storybook Test Does not exists', texts, <p>DefaultNode</p>)
  const test1 = selectVariant({ 'a/legacy': <p>a</p>, 'b/testing': <p>b</p>, 'c/testing': <p>c</p> }, <p>default node</p>)
  const test2 = selectVariantForExperiment(experimentName, texts, <p>DefaultNode</p>)
  return (
    <div>
      <div>{test0}</div>
      <div>{test1}</div>
      <div>{test2}</div>
    </div>
  )
}

const StorybookEntry = {
  argTypes: {},
  component: View,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Hooks/useExperiments',
} as ComponentMeta<typeof View>

const Template: ComponentStory<typeof View> = (args) => <View {...args} />

const Default = Template.bind({})
Default.args = {}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
