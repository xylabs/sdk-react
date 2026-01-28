import { delay } from '@xylabs/sdk-js'

import { RedditBaseEvent } from './BaseEvent.ts'

class RedditStandardEvent<T extends Record<string, unknown>> extends RedditBaseEvent<T> {
  override async send(data: T) {
    this.rdt.track(this.name, data)
    await delay(0) // force async to increase reporting odds
  }
}

export { RedditStandardEvent }
