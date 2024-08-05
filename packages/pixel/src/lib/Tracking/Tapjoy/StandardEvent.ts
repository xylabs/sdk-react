import { delay } from '@xylabs/delay'

import { TapjoyBaseEvent } from './BaseEvent.ts'
class TapjoyStandardEvent<T extends Record<string, unknown>> extends TapjoyBaseEvent<T> {
  override async send(data: T) {
    this.ef.track(this.name, data)
    await delay(0)
  }
}

export { TapjoyStandardEvent }
