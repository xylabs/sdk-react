import { type EmptyObject, toJsonObject } from '@xylabs/object'
import type { Mixpanel } from 'mixpanel-browser'

class MixpanelBaseEvent<T extends EmptyObject> {
  constructor(protected name: string, protected mixpanel: Mixpanel) {}

  send(fields: T) {
    this.mixpanel.track(this.name, toJsonObject(fields, undefined, 10))
  }
}

export { MixpanelBaseEvent }
