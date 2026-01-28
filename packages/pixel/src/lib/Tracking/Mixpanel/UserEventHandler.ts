import type {
  FunnelStartedFields, PurchaseFields,
  TestStartedFields,
  UserClickFields, UserEventHandler, ViewContentFields,
} from '@xylabs/pixel'
import { type EmptyObject } from '@xylabs/sdk-js'
import type { Mixpanel } from 'mixpanel-browser'

import { MixpanelCustomEvent } from './CustomEvent.ts'

export class MixpanelUserEventHandler<T extends EmptyObject> implements UserEventHandler<T> {
  private mixpanel: Mixpanel
  constructor(mixpanel: Mixpanel) {
    this.mixpanel = mixpanel
  }

  async funnelStarted(data: FunnelStartedFields | T) {
    const event = new MixpanelCustomEvent<FunnelStartedFields | T>('FunnelStarted', this.mixpanel)
    return await event.send(data)
  }

  async purchase(data: PurchaseFields | T) {
    const event = new MixpanelCustomEvent<PurchaseFields | T>('Purchase', this.mixpanel)
    return await event.send(data)
  }

  async testStarted(data: TestStartedFields | T) {
    const event = new MixpanelCustomEvent<TestStartedFields | T>('TestStarted', this.mixpanel)
    return await event.send(data)
  }

  async userClick(data: UserClickFields | T) {
    const event = new MixpanelCustomEvent<UserClickFields | T>('UserClick', this.mixpanel)
    return await event.send(data)
  }

  async viewContent(data: ViewContentFields | T) {
    const event = new MixpanelCustomEvent<ViewContentFields | T>('ViewContent', this.mixpanel)
    return await event.send(data)
  }
}
