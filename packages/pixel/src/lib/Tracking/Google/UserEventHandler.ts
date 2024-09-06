import { type EmptyObject } from '@xylabs/object'
import type {
  FunnelStartedFields, TestStartedFields, UserClickFields, UserEventHandler, ViewContentFields,
} from '@xylabs/pixel'

import { GoogleCustomEvent } from './CustomEvent.ts'

class GoogleUserEventHandler<T extends EmptyObject> implements UserEventHandler<T> {
  async funnelStarted(data: FunnelStartedFields | T) {
    const event = new GoogleCustomEvent<FunnelStartedFields | T>('FunnelStarted')
    return await event.send(data)
  }

  async testStarted(data: TestStartedFields | T) {
    const event = new GoogleCustomEvent<TestStartedFields | T>('TestStarted')
    return await event.send(data)
  }

  async userClick(data: UserClickFields | T) {
    const event = new GoogleCustomEvent<UserClickFields | T>('UserClick')
    return await event.send(data)
  }

  async viewContent(data: ViewContentFields | T) {
    const event = new GoogleCustomEvent<ViewContentFields | T>('ViewContent')
    return await event.send(data)
  }
}

export { GoogleUserEventHandler }
