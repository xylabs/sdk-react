import { delay } from '@xylabs/sdk-js'

import { FacebookBaseEvent } from './BaseEvent'

class FacebookCustomEvent<T extends Record<string, unknown>> extends FacebookBaseEvent<T> {
  async send(data: T) {
    this.fbq.trackCustom(this.name, data)
    await delay(0) //force async to increase reporting odds
  }
}

export { FacebookCustomEvent }
