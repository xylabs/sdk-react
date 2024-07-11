import { delay } from '@xylabs/delay'

import { RedditBaseEvent } from './BaseEvent.js'

class RedditStandardEvent<T extends Record<string, unknown>> extends RedditBaseEvent<T> {
  override async send(data: T) {
    this.rdt.track(this.name, data)
    await delay(0) //force async to increase reporting odds
  }
}

export { RedditStandardEvent }
