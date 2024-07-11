import { Meta, StoryFn } from '@storybook/react'
import { useLocalStorage } from '@xylabs/react-shared'
import { useEffect } from 'react'

const View: React.FC = () => {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [storedBoolean, setStoredBoolean] = useLocalStorage<boolean>('test_boolean', false)
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [defaultObject, setDefaultObject] = useLocalStorage<object | undefined>('test_object', { bar: true, foo: false })
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line unicorn/no-useless-undefined
  const [storedString, setStoredString] = useLocalStorage<string | undefined>('test_string', undefined)
  useEffect(() => {
    setStoredBoolean(true)
    setStoredString('Nachos')
    setDefaultObject({ bar: true, foo: false })
  }, [setStoredBoolean, setStoredString, setDefaultObject])
  return (
    <>
      <div>
        <div>{storedBoolean ? 'True' : 'False'}</div>
        <div>{JSON.stringify(defaultObject)}</div>
        <div>{storedString}</div>
      </div>
      <div>
        <div>storedBoolean: {localStorage.getItem('test_boolean') ?? 'undefined'}</div>
        <div>defaultObject: {localStorage.getItem('test_object') ?? 'undefined'}</div>
        <div>storedString: {localStorage.getItem('test_string') ?? 'undefined'}</div>
      </div>
    </>
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
  title: 'Hooks/useLocalStorage',
} as Meta<typeof View>

const Template: StoryFn<typeof View> = (args: Record<string, never>) => <View {...args} />

const Default = Template.bind({})
Default.args = {}

export { Default }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
