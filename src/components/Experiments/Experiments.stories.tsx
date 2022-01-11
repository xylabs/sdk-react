import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FlexRow } from '../FlexBox'
import { Experiments } from './Experiments'
import { Experiment } from './Experiment'


const StoryBookEntry = {
  argTypes: {},
  component: Experiments,
  parameters: {
    docs: {
      page: null,
    }
  },
  title: 'Components/Experiments',
} as ComponentMeta<typeof Experiments>

const Template: ComponentStory<typeof Experiments> = (args) => (
  <FlexRow>
    <Experiments name={'storybookExperiment'}>
      <Experiment key={'true'} weight={50}>
        <div style={{width: 100, height: 100, display: 'block', backgroundColor: 'red'}}/>
      </Experiment>
      <Experiment key={'false'} weight={50}>
        <div style={{width: 100, height: 100, display: 'block', backgroundColor: 'blue'}}/>
      </Experiment>
    </Experiments>
  </FlexRow>
)

const BasicExperiment = Template.bind({})

export { BasicExperiment }

