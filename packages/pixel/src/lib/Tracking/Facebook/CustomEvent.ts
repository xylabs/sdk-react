import { delay } from '@xylabs/delay'
import { type EmptyObject, toJsonObject } from '@xylabs/object'

import { FacebookBaseEvent } from './BaseEvent.ts'

class FacebookCustomEvent<TData extends EmptyObject> extends FacebookBaseEvent<TData> {
  override async send<T extends TData>(data: T, eventId?: string) {
    this.fbq.trackCustom(this.name, toJsonObject(data, undefined, 10), eventId)
    await delay(0) // force async to increase reporting odds
  }
}

export { FacebookCustomEvent }
