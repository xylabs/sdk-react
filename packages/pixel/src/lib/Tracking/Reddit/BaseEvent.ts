import { assertEx } from '@xylabs/assert'
import { delay } from '@xylabs/delay'

import { Rdt } from './Rdt.js'

class RedditBaseEvent<T> {
  name: string
  rdt: Rdt
  constructor(name: string) {
    this.name = name
    this.rdt = assertEx(Rdt.instance, () => 'Missing Rdt')
  }

  async send(_data: T) {
    await delay(0) //force async to increase reporting odds
  }
}

export { RedditBaseEvent }
