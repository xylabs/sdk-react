import type {
  FunnelStartedFields, PurchaseFields,
  TestStartedFields,
  UserClickFields, UserEventHandler, ViewContentFields,
} from '@xylabs/pixel'
import { type EmptyObject } from '@xylabs/sdk-js'

import { XyCustomEvent } from './CustomEvent.ts'

class XyUserEventHandler<T extends EmptyObject> implements UserEventHandler<T> {
  async funnelStarted(data: FunnelStartedFields | T) {
    const event = new XyCustomEvent<FunnelStartedFields | T>('FunnelStarted')
    return await event.send(data)
  }

  async purchase(data: PurchaseFields | T) {
    const event = new XyCustomEvent<PurchaseFields | T>('TestStarted')
    return await event.send(data)
  }

  async testStarted(data: TestStartedFields | T) {
    const event = new XyCustomEvent<TestStartedFields | T>('TestStarted')
    return await event.send(data)
  }

  async userClick(data: UserClickFields | T) {
    const event = new XyCustomEvent<UserClickFields | T>('UserClick')
    return await event.send(data)
  }

  async viewContent(data: ViewContentFields | T) {
    const event = new XyCustomEvent<ViewContentFields | T>('ViewContent')
    return await event.send(data)
  }
}

export { XyUserEventHandler }
