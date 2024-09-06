import type { EmptyObject } from '@xylabs/object'
import type {
  FunnelStartedFields, TestStartedFields, UserClickFields, UserEventHandler, ViewContentFields,
} from '@xylabs/pixel'

import { FacebookCustomEvent } from './CustomEvent.ts'

class FacebookUserEventHandler<T extends EmptyObject> implements UserEventHandler<T> {
  async funnelStarted(data: FunnelStartedFields | T) {
    const event = new FacebookCustomEvent<FunnelStartedFields | T>('FunnelStarted')
    return await event.send(data)
  }

  async testStarted(data: TestStartedFields | T) {
    const event = new FacebookCustomEvent<TestStartedFields | T>('TestStarted')
    return await event.send(data)
  }

  async userClick(data: UserClickFields | T) {
    const event = new FacebookCustomEvent<UserClickFields | T>('UserClick')
    return await event.send(data)
  }

  async viewContent(data: ViewContentFields | T) {
    const event = new FacebookCustomEvent<ViewContentFields | T>('ViewContent')
    return await event.send(data)
  }
}

export { FacebookUserEventHandler }
