import { delay } from '@xylabs/delay'

import { TiktokBaseEvent } from './BaseEvent'

class TiktokCustomEvent<T extends Record<string, unknown>> extends TiktokBaseEvent<T> {
  async send(data: T) {
    this.ttq.track(this.name, data)
    await delay(0) //force async to increase reporting odds
  }
}

export { TiktokCustomEvent }
