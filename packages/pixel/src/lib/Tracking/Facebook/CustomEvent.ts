import { delay } from '@xylabs/sdk-js'
import { type EmptyObject, toSafeJsonObject } from '@xylabs/sdk-js'

import { FacebookBaseEvent } from './BaseEvent.ts'

class FacebookCustomEvent<TData extends EmptyObject> extends FacebookBaseEvent<TData> {
  override async send<T extends TData>(data: T, eventId?: string) {
    this.fbq.trackCustom(this.name, toSafeJsonObject(data, undefined, 10), eventId)
    await delay(0) // force async to increase reporting odds
  }
}

export { FacebookCustomEvent }
