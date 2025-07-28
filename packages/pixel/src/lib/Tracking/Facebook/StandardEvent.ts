import { delay } from '@xylabs/delay'
import { type EmptyObject, toSafeJsonObject } from '@xylabs/object'

import { FacebookBaseEvent } from './BaseEvent.ts'
import type { FacebookStandardEventNames } from './Fbq.ts'

class FacebookStandardEvent<T extends EmptyObject> extends FacebookBaseEvent<T, FacebookStandardEventNames> {
  override async send(data: T, eventId?: string) {
    this.fbq.track(this.name, toSafeJsonObject(data, undefined, 10), eventId)
    await delay(0) // force async to increase reporting odds
  }
}

export { FacebookStandardEvent }
