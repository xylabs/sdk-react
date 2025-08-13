import { type EmptyObject, toSafeJsonObject } from '@xylabs/object'
import type { Mixpanel } from 'mixpanel-browser'

class MixpanelPageViewEvent<T extends EmptyObject> {
  protected mixpanel: Mixpanel

  constructor(mixpanel: Mixpanel) {
    this.mixpanel = mixpanel
  }

  send(fields: T) {
    this.mixpanel.track_pageview(toSafeJsonObject(fields, undefined, 10))
  }
}

export { MixpanelPageViewEvent }
