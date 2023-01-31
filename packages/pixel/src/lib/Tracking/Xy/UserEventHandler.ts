import { FunnelStartedFields, UserClickFields, UserEventHandler, ViewContentFields } from '@xylabs/pixel'

import { XyCustomEvent } from './CustomEvent'

class XyUserEventHandler<T extends Record<string, unknown>> implements UserEventHandler<T> {
  public async funnelStarted(data: FunnelStartedFields | T) {
    const event = new XyCustomEvent<FunnelStartedFields | T>('FunnelStarted')
    return await event.send(data)
  }

  public async testStarted(data: T) {
    const event = new XyCustomEvent<T>('TestStarted')
    return await event.send(data)
  }

  public async userClick(data: UserClickFields | T) {
    const event = new XyCustomEvent<UserClickFields | T>('UserClick')
    return await event.send(data)
  }

  public async viewContent(data: ViewContentFields | T) {
    const event = new XyCustomEvent<ViewContentFields | T>('ViewContent')
    return await event.send(data)
  }
}

export { XyUserEventHandler }
