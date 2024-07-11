import { CardContent, CardHeader } from '@mui/material'
import { StoryFn } from '@storybook/react'
import { BusyCard, BusyCardProps } from '@xylabs/react-flexbox'

// eslint-disable-next-line import/no-default-export
export default {
  component: BusyCard,
  title: 'busy/BusyCard',
}

const Template: StoryFn<typeof BusyCard> = (props: BusyCardProps) => {
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
