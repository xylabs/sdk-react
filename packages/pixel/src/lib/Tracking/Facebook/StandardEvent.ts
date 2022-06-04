import { delay } from '@xylabs/sdk-js'

import { FacebookBaseEvent } from './BaseEvent'

class FacebookStandardEvent<T extends Record<string, unknown>> extends FacebookBaseEvent<T> {
  async send(data: T, eventId?: string) {
    this.fbq.track(this.name, data, eventId)
    await delay(0) //force async to increase reporting odds
  }
}

export { FacebookStandardEvent }
