import { type EmptyObject, toSafeJsonObject } from '@xylabs/sdk-js'
import type { Mixpanel } from 'mixpanel-browser'

class MixpanelBaseEvent<T extends EmptyObject> {
  protected mixpanel: Mixpanel
  protected name: string

  constructor(name: string, mixpanel: Mixpanel) {
    this.name = name
    this.mixpanel = mixpanel
  }

  send(fields: T) {
    this.mixpanel.track(this.name, toSafeJsonObject(fields, undefined, 10))
  }
}

export { MixpanelBaseEvent }
