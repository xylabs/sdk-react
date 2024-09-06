import { delay } from '@xylabs/delay'
import { type EmptyObject, toJsonObject } from '@xylabs/object'

import { FacebookBaseEvent } from './BaseEvent.ts'

class FacebookStandardEvent<T extends EmptyObject> extends FacebookBaseEvent<T> {
  override async send(data: T, eventId?: string) {
    this.fbq.track(this.name, toJsonObject(data, undefined, 10), eventId)
    await delay(0) // force async to increase reporting odds
  }
}

export { FacebookStandardEvent }
