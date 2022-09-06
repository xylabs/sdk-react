import { CardContent, CardHeader } from '@mui/material'
import { ComponentStory } from '@storybook/react'

import { BusyCard } from './BusyCard'

// eslint-disable-next-line import/no-default-export
export default {
  component: BusyCard,
  title: 'busy/BusyCard',
}

const Template: ComponentStory<typeof BusyCard> = (props) => {
  return (
    <BusyCard {...props}>
      <CardHeader title="Card Header"></CardHeader>
      <CardContent>Card Content</CardContent>
    </BusyCard>
  )
}

const Default = Template.bind({})
Default.args = {}

const WithBusy = Template.bind({})
WithBusy.args = {
  busy: true,
}

export { Default, WithBusy }
