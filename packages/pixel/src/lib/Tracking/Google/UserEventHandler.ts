import type {
  FunnelStartedFields, UserClickFields, UserEventHandler, ViewContentFields,
} from '@xylabs/pixel'

import { GoogleCustomEvent } from './CustomEvent.ts'

class GoogleUserEventHandler<T extends Record<string, unknown>> implements UserEventHandler<T> {
  async funnelStarted(data: FunnelStartedFields | T) {
    const event = new GoogleCustomEvent<FunnelStartedFields | T>('FunnelStarted')
    return await event.send(data)
  }

  async testStarted(data: T) {
    const event = new GoogleCustomEvent<T>('TestStarted')
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
