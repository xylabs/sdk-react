import { delay } from '@xylabs/delay'

import { FacebookBaseEvent } from './BaseEvent.ts'

class FacebookCustomEvent<T extends Record<string, unknown>> extends FacebookBaseEvent<T> {
  override async send(data: T, eventId?: string) {
    this.fbq.trackCustom(this.name, data, eventId)
    await delay(0) // force async to increase reporting odds
  }
}

export { FacebookCustomEvent }
