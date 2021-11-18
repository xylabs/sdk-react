import { delay } from '@xylabs/sdk-js'

import { TiktokBaseEvent } from './BaseEvent'

class TiktokStandardEvent<T extends Record<string, unknown>> extends TiktokBaseEvent<T> {
  async send(data: T) {
    this.ttq.track(this.name, data)
    await delay(0) //force async to increase reporting odds
  }
}

export { TiktokStandardEvent }
