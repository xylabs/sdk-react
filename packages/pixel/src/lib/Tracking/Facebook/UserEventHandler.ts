import { FunnelStartedFields, UserClickFields, UserEventHandler, ViewContentFields } from '@xylabs/pixel'

import { FacebookCustomEvent } from './CustomEvent'

class FacebookUserEventHandler<T extends Record<string, unknown>> implements UserEventHandler<T> {
  async funnelStarted(data: FunnelStartedFields | T) {
    const event = new FacebookCustomEvent<FunnelStartedFields | T>('FunnelStarted')
    return await event.send(data)
  }

  async testStarted(data: T) {
    const event = new FacebookCustomEvent<T>('TestStarted')
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
