import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { FlexRow } from '../FlexBox'
import { Experiment } from './Experiment'
import { Experiments } from './Experiments'

const StoryBookEntry = {
  argTypes: {},
  component: Experiments,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'Components/Experiments',
} as ComponentMeta<typeof Experiments>

const Template: ComponentStory<typeof Experiments> = (args) => (
  <FlexRow>
    <Experiments name={'storybookExperiment'}>
      <Experiment key={'true'} weight={50}>
        <div style={{ backgroundColor: 'red', display: 'block', height: 100, width: 100 }} />
      </Experiment>
      <Experiment key={'false'} weight={50}>
        <div style={{ backgroundColor: 'blue', display: 'block', height: 100, width: 100 }} />
      </Experiment>
    </Experiments>
  </FlexRow>
)

const BasicExperiment = Template.bind({})

export { BasicExperiment }
